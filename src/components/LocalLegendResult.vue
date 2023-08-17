<template>
  <div class="row justify-content-between">
    <div class="col-auto">
      <div class="text-muted small">Segment distance</div>
      <div class="h5">{{ distance }}</div>
    </div>
    <div class="col-auto">
      <div class="text-muted small">Avg grade</div>
      <div class="h5">{{ grade }}</div>
    </div>
    <div class="col-auto">
      <div class="text-muted small">Effort count</div>
      <div class="h5">{{ segment.computed?.effortCount }}</div>
    </div>
    <div class="col-auto">
      <div class="text-muted small">Total distance</div>
      <div
        class="h5"
        :class="athleteIsLocalLegend ? 'text-success fw-bold' : ''"
        :title="athleteIsLocalLegend ? 'It\'s you!' : ''"
      >
        <strong>{{ totalDistance }}</strong>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, type PropType } from 'vue';
  import { type Segment } from '@/types';
  import { formatDistance } from '@/utils';

  export default defineComponent({
    name: 'LocalLegendResult',
    props: {
      athleteId: {
        type: Number,
        required: true,
      },
      segment: {
        type: Object as PropType<Segment>,
        required: true,
      },
    },
    computed: {
      athleteIsLocalLegend(): boolean {
        return this.segment.details?.local_legend?.athlete_id === this.athleteId;
      },
      distance(): string {
        return formatDistance(this.segment.details?.distance);
      },
      grade(): string {
        return this.segment.details?.average_grade?.toFixed(1) + '%';
      },
      totalDistance(): string {
        return formatDistance(this.segment.computed?.distanceToLocalLegend);
      },
    },
  });
</script>
