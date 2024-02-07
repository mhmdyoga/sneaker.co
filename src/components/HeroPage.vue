<template>
  <div class="hero">
    <div class="info">
      <div class="title-1">Making your</div>
      <div class="title-2">Sneakers.</div>
    </div>
    <!-- image 1 -->
    <div class="details" v-if="page === 'image1'">
      <div class="imgBox">
        <img :src="image1" alt="" />
      </div>
    </div>
    <!-- image 2 -->
    <div class="details" v-if="page === 'image2'">
      <div class="imgBox1">
        <img :src="image2" alt="" />
      </div>
    </div>
    <!-- image 3 -->
    <div class="details" v-if="page === 'image3'">
      <div class="imgBox1">
        <img :src="image3" alt="" />
      </div>
    </div>
    <div class="subtitel">
      <p>
        Sneakers adalah sebuah inti dari fashion, dan <br />
        Sneakers,co membantu menyediakan barang <br />
        dengan berkualitas. Kami berkerjasama dengan<br />
        para mita agar anda menemukan produk kami <br />
        dimana pun
      </p>
    </div>
    <div class="product-details">
      <div class="detail">
        <img @click="NavigatTo('image1')" :src="image1" alt="" width="128" />
      </div>
      <div class="detail1">
        <img @click="NavigatTo('image2')" :src="image2" alt="" width="78" />
      </div>
      <div class="detail1">
        <img @click="NavigatTo('image3')" :src="image3" alt="" width="78" />
      </div>
    </div>
    <div class="btn">
      <CustomButton msg="Order Now!!" />
    </div>
    <div class="hero2">
      <div class="marquee">
        <span>
          MAKE YOUR STYLE MAKE YOUR STYLE MAKE YOUR STYLE MAKE YOUR STYLE MAKE
          YOUR STYLE MAKE YOUR STYLE MAKE YOUR STYLE MAKE YOUR STYLE MAKE YOUR
          STYLE
        </span>
      </div>
      <div class="collab">
        <h2>Collaboration With</h2>
        <div class="logos">
          <img src="../assets/stussy.png" alt="" width="128" />
          <img src="../assets/stoniland.png" alt="" width="228" />
          <img
            src="../assets/nb.png"
            alt=""
            width="228"
            height="103"
            class="nb"
          />
          <img src="../assets/tnf.png" alt="" width="228" />
        </div>
      </div>
    </div>
    <div class="hero3">
      <h2>
        Preview
        <span class="material-symbols-outlined" style="color: #585858"
          >arrow_downward</span
        >
      </h2>
      <div class="img">
        <div class="image1">
          <div class="images1">
            <img src="../assets/jordanfiba.png" alt="" width="228" />
          </div>
        </div>
        <div class="img2">
          <!-- dg img1 -->
          <div class="images2">
            <div class="imgs2">
              <img src="../assets/sole.png" alt="" width="328" />
            </div>
          </div>
          <div class="images3">
            <div class="imgs3">
              <img src="../assets/xxxviii.png" alt="" width="328" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  <div class="footer">
        <FooterItem/>
    </div>
</template>

<script>
import CustomButton from "@/item/CustomButton.vue";
import FooterItem from '@/item/FooterItem.vue';
export default {
  name: "HeroPage",
  components: {
    CustomButton,
    FooterItem
  },
  data() {
    return {
      image1:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMgTerhZwkfdE1ZNm1dH3vi2_g2K_bT9ZfRwjsVJkVtPKZ49sKOjFAMuar_hKauRP9APVDUbBnpa50onoUq99kTnFyLJbojCos29SfDz4_Ij7e_2pSA8PONJUephalUp_Wjm0DNurfuFxqdMjiWy-rCAyS4sVloNJw548i8Vf04HJsxxMd60z-rZrW2uyv/s629/rotate11.png",
      image2:
        "https://blogger.googleusercontent.com/img/a/AVvXsEgLIQ30PXUknNlzcsjEPb8c9MtA9iUYfzRMFSwLj78VgJxIwisgboK6BP9UCTem3EbfsRoigASjVLzfRxNZ8trn4RdV2MLHr412MEaxLTPLpyQmFvNtzBVqX9yvccFqs9slV_SrmiHofYMQotMOCdMWWPMYN4TtbpRyurd2vi1O0gH2k0O3OmWyTB7gAzf3",
      image3:
        "https://blogger.googleusercontent.com/img/a/AVvXsEi_8vAyjhxCCJyyD3OtF-oyV_7GTi75HD3i7ZjCL0eZ2JolBkUnG4jZ32v7A_mFSnLhhzs1qOZn0SPYQj5L5dyYecjjCN8qdouMqdhjZYXe45F94FeG_b6nBqpp0qn7qGEqkoJ_1rKoGm0E59O0NVjEWWuYvjID-3gE_k8CGKZk8FdJPZ40RkfkYiRQFCi5",
      page: "image1",
    };
  },
  methods: {
    NavigatTo(page) {
      this.page = page;
    },
  },
};
</script>

<style>
</style>