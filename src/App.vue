<template>
  <div class="container mx-auto col-xs-12 col-sm-6 col-md-6 mt-3">
    <h1>Device Managemant App</h1>
    <DeviceModal/>
    <DeviceList />
  </div>
</template>

<script>
import DeviceList from './components/DeviceList.vue';
import DeviceModal from './components/DeviceModal.vue';

export default {
  components: { DeviceList, DeviceModal },
}

</script>