<template>
  <aside
  class="mobile-menu t-dark md:hidden"
  :class="{ 'mobile-menu_open': menuOpen }"
  >
    <nav class="mobile-menu__nav bg-white p-4 flex flex-col">
      <ul>
        <li
        v-for="link in nav"
        :key="link.link"
        >
          <router-link :to="link.link" class="mobile-menu__link block py-4">
            {{ link.title }}
          </router-link>
        </li>
      </ul>
    </nav>

    <div @click="menuOpen = !menuOpen" class="mobile-menu__backdrop"></div>

  </aside>

  <button
  @click="menuOpen = !menuOpen"
  class="menu-toggler text-2xl md:hidden"
  :class="{ 'menu-toggler_open': menuOpen }"
  ><i></i></button>

</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
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

  watch: {
    '$route': function() {
      this.menuOpen = false;
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/tokens';

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  pointer-events: none;

  .mobile-menu__nav {
    z-index: 1002;
    position: absolute;
    top: 0;
    left: 20%;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    transform-origin: 100% 100%;
    transition: all 0.6s;
    pointer-events: all;

    .mobile-menu__link {
      &.router-link-active {
        text-decoration: underline;
        font-weight: 600;
      }
    }
  }

  .mobile-menu__backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: #000000, $alpha: 0.5);
    // backdrop-filter: blur(2px);
    z-index: 1001;
    cursor: pointer;
    transition: all 0.6s;
  }

  // Открыто

  &.mobile-menu_open {
    .mobile-menu__backdrop {
      background-color: rgba($color: #000000, $alpha: 0.5);
      // backdrop-filter: blur(0);
      pointer-events: all;
    }

    .mobile-menu__nav {
      transform: translateX(0);
    }
  }

  // Закрыто

  &:not(.mobile-menu_open) {
    .mobile-menu__backdrop {
      background-color: rgba($color: #000000, $alpha: 0);
      pointer-events: none;
      // backdrop-filter: blur(0);
    }

    .mobile-menu__nav {
      transform: translateX(100vw);
    }
  }

}

.menu-toggler {
  position: fixed;
  top: 1.5rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  z-index: 1003;

  &::before,
  &::after {
    content: '';
  }

  &::before {
    transform: translateY(-0.5em);
  }

  &::after {
    transform: translateY(0.5em);
  }

  &::before,
  &::after,
  i {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    border-top: 0.1em solid $t-dark;;
    border-bottom: 0.1em solid $t-dark;;
    border-radius: 4px;
    transition: all 0.6s;
    opacity: 1;
  }

  // при открытии

  &.menu-toggler_open {
    i {
      transform: translateX(-100%) scale(150%, 0);
      opacity: 0;
    }

    &::before {
      transform: translateY(0) rotate(45deg) scaleX(120%);
    }

    &::after {
      transform: translateY(-0) rotate(-45deg) scaleX(120%);
    }
  }
}


</style>
