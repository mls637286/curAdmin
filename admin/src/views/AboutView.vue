<template>
  <div class="about">
    <div style="width: 100%;height: 100%">
<!--      <china-map></china-map>-->
<!--      <alarm-type></alarm-type>-->
      <alarm-configure></alarm-configure>
    </div>
  </div>
</template>
<script>
import ChinaMap from '@/components/Echarts/ChinaMap'
import AlarmType from '@/components/SafeMonitoring/AlarmType'
import AlarmConfigure from '@/components/SafeMonitoring/AlarmConfigure'
export default {
  components:{
    ChinaMap,
    AlarmType,
    AlarmConfigure
  }
}
</script>
