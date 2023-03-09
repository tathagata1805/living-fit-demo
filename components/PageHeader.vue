<template>
  <header class="site-header">
    <nav class="navigation">
      <div class="menu-wrap d-flex flex-wrap align-items-center">
        <div class="logo-holder">
          <a href="index.html">
            <img src="/images/logo.svg" alt="logo" />
            <img src="/images/logo-dark.svg" alt="logo" />
          </a>
        </div>
        <div class="main-menu">
          <b-button v-b-toggle.sidebar-right class="mobile-menu-trigger"
            ><span></span><span></span><span></span
          ></b-button>
          <ul class="navbar-nav flex-row d-flex flex-wrap">
            <li class="nav-item">
              <a href="#" class="nav-link">Media</a>
            </li>
            <li class="nav-item mr-megamenu">
              <a href="#" class="nav-link">Equipment</a>
              <div class="megamenu-container">
                <megamenu />
              </div>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Workout Plans</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Courses</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Membership</a>
            </li>
          </ul>

          <!--MOBILE MENU-->
          <b-sidebar
            #default="{ hide }"
            id="sidebar-right"
            title="Sidebar"
            right
            shadow
            backdrop
            no-header
          >
            <div class="mobile-topbar d-flex">
              <a href="index.html">
                <img src="/images/logo.svg" alt="logo" />
              </a>
              <b-button class="side-nav-close" @click="hide">&times;</b-button>
            </div>
            <ul class="mobile-menu-list">
              <li><nuxt-link to="#">Media</nuxt-link></li>
              <li class="mobile-megamenu">
                <a v-b-toggle.collapse-1>Equipment</a>
                <b-collapse id="collapse-1">
                  <MobileMegamenu />
                </b-collapse>
              </li>
              <li><nuxt-link to="#">Workout Plans</nuxt-link></li>
              <li><nuxt-link to="#">Courses</nuxt-link></li>
              <li><nuxt-link to="#">Membership</nuxt-link></li>
            </ul>
          </b-sidebar>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import megamenu from "./megamenu.vue";
export default {
  components: { megamenu },
  name: "PageHeader",
  data() {
    return {
      backdrop: true,
    };
  },
};
</script>
<style>
.site-header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  transition: all 0.5s ease-in-out;
}
.site-header .logo-holder a {
  display: inline-block;
}
.site-header .logo-holder a img:last-child {
  display: none;
}
.site-header.sticky .logo-holder a img:last-child {
  display: block;
}
.site-header.sticky .logo-holder a img:first-child {
  display: none;
}
.site-header.sticky {
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.navigation {
  padding: 0 30px;
}
.main-menu {
  width: calc(100% - 185px);
}
.navbar-nav {
  justify-content: flex-end;
}
.navbar-nav .nav-item {
  padding: 20.5px 0;
  cursor: pointer;
}
.navbar-nav .nav-item a.nav-link {
  display: inline-block;
  color: #fff;
  font-size: 14px;
  padding: 10px;
  transition: all 0.5s ease-in-out;
}
.sticky .navbar-nav .nav-item a.nav-link {
  color: #162535;
}
.sticky .navbar-nav .nav-item a.nav-link:hover {
  color: #466cce;
}
.nav-item .nav-link {
  position: relative;
}
.nav-item .nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #fff;
  transform: scale(0);
  transition: all 0.5s ease-in-out;
}
.nav-item .nav-link:hover::after {
  transform: scale(1);
}
.nav-item.mr-megamenu > a.nav-link {
  padding-right: 25px;
}
.nav-item.mr-megamenu > a.nav-link:after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  color: #fff;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: url("/images/down.png") no-repeat center;
  filter: invert(100%);
  left: auto;
}
.sticky .nav-item.mr-megamenu > a.nav-link:after {
  filter: invert(0);
}
.sticky .nav-item.mr-megamenu > a:hover.nav-link:after {
  filter: invert(46%) sepia(20%) saturate(2544%) hue-rotate(192deg)
    brightness(84%) contrast(90%);
}
.nav-item.mr-megamenu > a:before {
  content: "";
  position: absolute;
  bottom: -17px;
  left: 50%;
  transform: translateX(-50%);
  height: 20px;
  width: 20px;
  border: 10px solid transparent;
  border-bottom-color: #fff;
  opacity: 0;
  z-index: 999;
  pointer-events: none;
  transform: translateY(100px);
  transition: all 0.5s ease-in-out;
}
.nav-item.mr-megamenu:hover > a:before {
  opacity: 1;
  pointer-events: all;
  transform: translate(-50%, 0);
}

.megamenu-container {
  position: absolute;
  width: 100%;
  left: 0;
  top: 78px;
  padding: 0 30px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(100px);
  transition: all 0.5s ease-in-out;
}
.nav-item.mr-megamenu:hover .megamenu-container {
  opacity: 1;
  pointer-events: all;
  transform: translateY(0);
}
.mobile-menu-trigger {
  display: none;
}
@media (max-width: 1023px) {
  .site-header {
    padding: 10px 0;
  }
  .navbar-nav {
    display: none !important;
  }
  .mobile-menu-trigger:hover,
  .mobile-menu-trigger:focus,
  .mobile-menu-trigger {
    display: block;
    background: transparent;
    padding: 0;
    margin-left: auto;
    border: none;
    outline: none;
    box-shadow: none;
  }
  .mobile-menu-trigger span {
    display: block;
    height: 5px;
    width: 40px;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  .sticky .mobile-menu-trigger span {
    background: #466cce;
  }
  .mobile-menu-trigger span:last-child {
    margin-bottom: 0;
  }
  .mobile-topbar {
    background: #466cce;
    padding: 10px 15px;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
  .side-nav-close {
    background: transparent;
    color: #fff;
    font-size: 30px;
    font-weight: 300;
    padding: 0;
    border: none;
  }
  .side-nav-close:focus {
    background: transparent;
  }
  .mobile-menu-list > li > a {
    padding: 7px 15px;
    display: block;
    color: #000;
    text-decoration: none;
  }
  .mobile-menu-list > li.mobile-megamenu > a {
    position: relative;
    padding-right: 40px;
  }
  .mobile-menu-list > li.mobile-megamenu > a:after {
    content: "+";
    position: absolute;
    top: 50%;
    right: 15px;
    color: #000;
    font-weight: 700;
    transform: translateY(-50%);
    font-size: 20px;
  }
  .mobile-menu-list > li.mobile-megamenu > a[aria-expanded="true"] {
    background: #466cce;
    color: #fff;
  }
  .mobile-menu-list > li.mobile-megamenu > a[aria-expanded="true"]:after {
    content: "-";
    color: #fff;
  }
  .parent-category a {
    display: block;
    padding: 7px 40px 7px 15px;
    position: relative;
    color: #000;
    text-decoration: none;
  }
  .parent-category a:after {
    content: "+";
    position: absolute;
    top: 50%;
    right: 15px;
    color: #000;
    font-weight: 700;
    transform: translateY(-50%);
    font-size: 20px;
  }
  .parent-category a[aria-expanded="true"] {
    background: #a4b6e4;
  }
  .parent-category a[aria-expanded="true"]:after {
    content: "-";
  }
  .sub-category li a {
    display: block;
    padding: 7px 15px;
    color: #000;
    text-decoration: none;
  }
}
@media (max-width: 767px) {
  .navigation {
    padding: 0 15px;
  }
}
</style>
