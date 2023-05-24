<template>
    <div>
        <table class="table table-striped" data-toggle="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Device Name</th>
                    <th scope="col">Device Type</th>
                    <th scope="col">Owner Name</th>
                    <th scope="col">Battery Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(device, index) in data" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ device.deviceName }}</td>
                    <td>{{ device.deviceType }}</td>
                    <td>{{ device.ownerName }}</td>
                    <td>{{ device.batteryStatus }}</td>
                    <td>
                        <button type="button" class='btn btn-sm btn-success' data-bs-toggle="modal"
                            data-bs-target="#exampleModal" @click="selectDevice(device)">Update</button>

                    </td>
                    <td>
                        <button type="button" class='btn btn-sm btn-danger' @click="deleteDevice(device)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    data() {
        return {
            data: []
        }
    },
    mounted() {
        this.axios.get('http://localhost:8080/api').then(response => {
            this.data = response.data
        })

    },
    methods: {
        deleteDevice(device) {
            this.axios.delete(`http://localhost:8080/delete`, { data: device }).then(response => console.log(response))
            window.location.reload(false);
        },
        selectDevice(device){
            this.$store.commit('updateSelectedDevice',device)
        }
    }
}

</script>