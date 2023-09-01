<template>
  <div v-if="athlete" class="row pt-4 pe-4 float-end">
    <div v-if="athlete" class="col text-center">
      <a :href="athleteURI" target="_blank">
        <img
          class="rounded-circle w-75 hover-opacity"
          :src="athlete?.profile"
          :title="`${athlete?.firstname} ${athlete?.lastname}. ${athlete?.city}, ${athlete?.country}. Id: ${athlete?.id}`"
        />
      </a>
      <a role="button" class="d-block link-primary logout py-2" @click.prevent="logout">logout</a>
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
  import { Cookie } from '@/types';

  export default defineComponent({
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
        Cookies.remove(Cookie.AccesToken);
        Cookies.remove(Cookie.RefreshToken);
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
  .hover-opacity:hover {
    opacity: 1;
  }
  .hover-opacity {
    opacity: 0.8;
  }
</style>
