<template>
    <div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add New Device
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">{{ selectedDevice !== null ? 'Edit Device':'Add New Device' }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            @click="clean"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit="saveDevice">
                            <div>
                                <label class="form-label">Device Name</label>
                                <input name="deviceName" type="text" class="form-control" v-model="form.deviceName"
                                    required />
                            </div>
                            <br>
                            <div>
                                <label class="form-label">Device Type</label>
                                <select name="deviceType" class="form-select " aria-label="Default select example"
                                    v-model="form.deviceType" required>
                                    <option selected disabled value="">Open this select menu</option>
                                    <option value="Smartphone">Smartphone</option>
                                    <option value="Tablet">Tablet</option>
                                    <option value="Camera">Camera</option>
                                </select>
                            </div>
                            <br>
                            <div>
                                <label class="form-label">Owner Name</label>
                                <input name="ownerName" type="text" class="form-control" v-model="form.ownerName"
                                    required />
                            </div>
                            <br />
                            <div>
                                <label class="form-label">Battery Status <h2 class='text-danger'>
                                        {{ form.batteryStatus }}</h2></label>
                                <input name="batteryStatus" type="range" clas="form-range" min="0" max="100"
                                    v-model="form.batteryStatus" />
                            </div>
                            <button v-if="selectedDevice == null" type="submit" class="btn btn-sm btn-primary">Save</button>
                            <button v-else type="submit" class="btn btn-sm btn-success">Update</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                            @click="clean">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: { deviceName: '', deviceType: '', ownerName: '', batteryStatus: 0 },
            selectedDeviceDetail: {},
            isUpdate: false
        }
    },
    methods: {
        saveDevice() {
            if (this.selectedDevice != null) {
                this.axios.put('http://localhost:8080/update', this.form).then(response => console.log(response))
            } else {
                this.axios.post('http://localhost:8080/device', this.form).then(response => console.log(response))
            }
        },
        updateDevice() {
            console.log(this.form);
        },
        clean() {
            this.$store.commit('updateSelectedDevice', {})
        }
    },
    computed: {
        selectedDevice() {
            return this.$store.state.selectedDevice
        }
    },
    watch: {
        selectedDevice() {
            if (this.selectedDevice) {
                this.form = { ...this.selectedDevice }
            }
        }
    }
}

</script>