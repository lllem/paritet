<template>
  <header class="top-nav">
    <div class="container max-w-screen-xl mx-auto px-4 pb-9 pt-6 grid
    grid-cols-12 grid-rows-1--
    grid-rows-3 items-center gap-y-3"
    >

      <div class="top-nav__right
      col-span-12 sm:col-span-5 row-span-1 md:row-span-2 md:row-span-3"
      >
        <router-link
        to="/"
        title="ПАРИТЕТ"
        class="top-nav__logo"
        >
          <img src="/assets/img/logo/logo_line.svg" alt="ПАРИТЕТ">
        </router-link>
      </div>

      <ul class="
      subnav hidden md:inline-flex justify-self-end
      text-slate-400
      gap-2
      col-span-7

      ">
        <li><a href="#">Поддержка</a></li> |
        <li><a href="#">FAQ</a></li> |
        <li><a href="#">Карта сайта</a></li> |
        <li><a href="#">Помощь</a></li>
      </ul>

      <div class="contacts inline-flex gap-x-8 gap-y-2
      justify-self-end col-span-12 sm:col-span-7
      flex-row sm:flex-col md:flex-row row-span-1 md:row-span-2 lg:row-span-1"
      >
        <a
        class="inline-block font-bold whitespace-nowrap"
        href="tel:+7 495-147-25-36"
        ><PhoneIcon class="icon"/> +7 (495) 147 25 36</a>
        <a
        class="inline-block font-bold whitespace-nowrap"
        href="mailto:paritet@mail.com"
        ><EnvelopeIcon class="icon"/> paritet@mail.com</a>
      </div>

      <nav class="md:flex justify-between text-slate-600 col-span-12 lg:col-span-7 gap-x-4 hidden">
        <router-link
        v-for="link in nav"
        :to="link.link"
        :key="link.link"
        >
          {{ link.title }}
        </router-link>
      </nav>

    </div>
  </header>
</template>

<script>
import {
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/vue/24/solid'

export default {
  components: {
    EnvelopeIcon,
    PhoneIcon,
  },

  data() {
    return {
      nav: [
        {
          title: 'Главная',
          link: '/',
        },
        {
          title: 'Поставки оборудования',
          link: '/equipment-supplies',
        },
        {
          title: 'Поставки РЭК',
          link: '/rec-supplies',
        },
        {
          title: 'Сертификаты',
          link: '/certificates',
        },
        {
          title: 'О нас',
          link: '/about',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/tokens';

.top-nav {
  border-bottom: 1px solid $blue;

  .top-nav__logo {
    // max-width: 25rem;
    max-width: 16rem;
    width: 100%;
    display: inline-block;

    img {
      width: 100%;
    }
  }

  .router-link-active {
    text-decoration: underline;
    font-weight: 600;
  }
}
</style>
