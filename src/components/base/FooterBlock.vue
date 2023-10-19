<template>
  <footer class="footer bg-dark py-10 text-blue-500 blue-border-top-xl">
    <div class="container max-w-screen-xl mx-auto px-4 grid grid-cols-3 items-end t-muted-dark">

      <div class="text-left">
        Правила использования<br>
        2023-2030©Все права защищены.
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
        РОССИЯ, г. Москва<br>
        +7 (123) 456 77 89<br>
        paritet@mail.com<br>
      </div>

    </div>
  </footer>
</template>

<style lang="scss">
@import '@/assets/styles/tokens';

.footer {
  // border-top: 4px solid $blue;

  .footer__logo {
    max-width: 16rem;
    display: inline-block;
    width: 100%;
  }
}
</style>
