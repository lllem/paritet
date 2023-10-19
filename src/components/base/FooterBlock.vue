<template>
  <footer class="footer bg-dark py-10 text-blue-500 blue-border-top-xl">
    <div class="container max-w-screen-xl mx-auto px-4 grid grid-cols-3 items-end t-muted-dark">

      <div class="text-left">
        Правила использования<br>
        2023-2030 ©&nbsp;Все права защищены.
      </div>

      <div class="text-center">
        <router-link
        to="/"
        title="ПАРИТЕТ"
        class="footer__logo"
        >
          <img src="/assets/img/logo/logo_dark.svg" alt="ПАРИТЕТ">
        </router-link>
      </div>

      <div class="text-right">
        <div class="footer__contacts">
          <span class="mb-1"><MapPinIcon class="icon"/> <span>РОССИЯ, г. Москва</span></span>
          <a href="tel:+7 (123) 456 77 89" class="hover:text-white mb-1"><PhoneIcon class="icon"/> <span>+7&nbsp;(123)&nbsp;456&nbsp;77&nbsp;89</span></a>
          <a href="mailto:paritet@mail.com" class="hover:text-white mb-1"><EnvelopeIcon class="icon"/> <span>paritet@mail.com</span></a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/vue/24/solid'

export default {
  components: {
    EnvelopeIcon,
    MapPinIcon,
    PhoneIcon,
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/tokens';

.footer {
  // border-top: 4px solid $blue;

  .footer__logo {
    max-width: 16rem;
    display: inline-block;
    width: 100%;
  }

  .footer__contacts {
    display: inline-flex;
    flex-flow: column;

    > * {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.25em;
    }
  }
}
</style>
