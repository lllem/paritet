<template>
  <footer class="footer bg-dark py-10 text-blue-500 blue-border-top-xl">
    <div class="container max-w-screen-xl mx-auto px-4 grid grid-col-reverse grid-cols-3 items-end t-muted-dark">

      <div class="text-center w-full hidden sm:block">
        <router-link
        to="/"
        title="ПАРИТЕТ"
        class="footer__logo px-6 py-4"
        >
          <img
          src="/assets/img/logo/logo_dark.svg"
          alt="ПАРИТЕТ"
          class="mx-auto"
          data-aos="zoom-out" data-aos-duration="1000"
          >
        </router-link>
      </div>

      <div class="col-span-3 md:col-span-1 md:text-right py-4 md:order-last">
        <div class="footer__contacts">
          <span class="mb-1"><MapPinIcon class="icon"/> <span>РОССИЯ, г. Москва</span></span>
          <a href="tel:+7 (123) 456 77 89" class="hover:text-white mb-1 whitespace-nowrap"><PhoneIcon class="icon"/> <span>+7 (123) 456 77 89</span></a>
          <a href="mailto:paritet@mail.com" class="hover:text-white mb-1"><EnvelopeIcon class="icon"/> <span>paritet@mail.com</span></a>
        </div>
      </div>

      <div class="text-left py-4 md:order-first col-span-3 md:col-span-1">
        Правила использования<br>
        2023-2030 ©&nbsp;Все права защищены.
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
  .footer__logo {
    display: inline-block;
    width: 100%;
    border-left: 1px solid currentColor;
    border-right: 1px solid currentColor;

    img {
      max-width: 16rem;
    }
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
