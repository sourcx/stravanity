<template>
  <div v-if="athlete" class="row py-3 bg-secondary bg-opacity-10">
    <div v-if="athlete" class="col text-center">
      <a :href="athleteURI" target="_blank">
        <img
          class="img-thumbnail rounded-circle"
          :src="athlete?.profile"
          :title="`${athlete?.city}, ${athlete?.country}. Id: ${athlete?.id}`"
        />
      </a>
      <p class="mt-3 mb-0">
        Logged in as
        <b>{{ athlete?.firstname }} {{ athlete?.lastname }}</b>
        <a role="button" class="link-primary logout px-1" @click.prevent="logout">logout</a>
      </p>
    </div>
  </div>
  <div v-else class="row py-3 bg-primary bg-opacity-10">
    <div class="col text-center">
      <div class="col">
        <p>Please connect with Strava to continue</p>
        <a :href="connectURI">
          <img alt="Connect with Strava" src="/img/button-connect.png" height="48" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, type PropType } from 'vue';
  import type { AthleteResponse } from 'strava-v3';
  import Cookies from 'js-cookie';

  export default defineComponent({
    name: 'Athlete',
    props: {
      athlete: {
        type: Object as PropType<AthleteResponse | null>,
      },
    },
    computed: {
      athleteURI() {
        return `https://www.strava.com/athletes/${this.athlete?.id}`;
      },
      connectURI() {
        const params = new URLSearchParams();
        params.append('scope', 'read');
        params.append('response_type', 'code');
        params.append('client_id', import.meta.env.VITE_STRAVA_CLIENT_ID);
        params.append('redirect_uri', `${window.location.protocol}//${window.location.host}/api/login`);
        return `https://www.strava.com/oauth/authorize?${params.toString()}`;
      },
    },
    methods: {
      logout() {
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');
        localStorage.removeItem('athlete');
        location.reload();
      },
    },
  });
</script>

<style lang="scss" scoped>
  a.logout {
    font-size: 70%;
  }
</style>
