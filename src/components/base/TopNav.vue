<template>
  <header class="top-nav">
    <div class="container max-w-screen-xl mx-auto px-4 py-5 grid grid-cols-12 items-center">

      <div class="top-nav__right col-span-5">
        <router-link
        to="/"
        title="ПАРИТЕТ"
        class="top-nav__logo"
        >
          <img src="/assets/img/logo/logo_line.svg" alt="ПАРИТЕТ">
        </router-link>
      </div>

      <div class="top-nav__right grid content-end text-right col-span-7">
        <ul class="subnav inline-flex justify-self-end text-slate-400 gap-1">
          <li class="py-1">Поддержка</li> |
          <li class="py-1">FAQ</li> |
          <li class="py-1">Карта сайта</li> |
          <li class="py-1">Помощь</li>
        </ul>

        <div class="contacts inline-flex justify-self-end gap-8">
          <a class="inline-block font-bold py-2" href="tel:+7 495-147-25-36">+7 (495) 147 25 36</a>
          <a class="inline-block font-bold py-2" href="mailto:paritet@mail.com">paritet@mail.com</a>
        </div>

        <nav class="flex justify-between text-slate-600">
          <router-link
          v-for="link in nav"
          :to="link.link"
          :key="link.link"
          >
            {{ link.title }}
          </router-link>
        </nav>
      </div>

    </div>
  </header>
</template>

<script>
export default {
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
