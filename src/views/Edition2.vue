<template>
  <v-container grid-list-xl fluid class="ma-0 pa-2">
    <PageTemp class="ma-0 pa-0" v-bind:cards='cards' v-bind:authors='authors' v-bind:contributors='contributors' v-bind:meta='meta'></PageTemp>
    <v-row justify="center" align="center" class="ma-0 pa-2">
        <v-btn>
          <router-link to="/edition1">Go to Edition 1 (May 2020)</router-link>
        </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import PageTemp from '../components/PageTemp.vue'

export default {
  name: 'Edition2',
  components: {
    PageTemp
  },
  // there's a much better way to do this but i'm too lazy rn
  data() {
    return {
      meta: {
        edition: "June 2020",
        file: "quaranzine_june_2020.pdf",
        icon: "mb_june_2020.jpg",
        background: "b_june_2020.jpg"
      },
      cards: [
        {
          name:"Step 1",
          img:"step1.png",
          content:"Download the Quaranzine and share our page 'https://tinyurl.com/genqzine', and like us on social media (links above)!",
          colour:"blue"
        },
        {
          name:"Step 2",
          img:"step2.png",
          content:"If you have a printer, print out three copies! One of these is for yourself, so have a cup of tea and a little read before moving on to the next step.",
          colour:"blue"
        },
        {
          name:"Step 3",
          img:"step3.png",
          content:"Share the other two to your neighbours, and provide them some delight in the lockdown! Could you imagine how joyful you'd be if you received this Zine through your door?",
          colour:"blue"
        },
        {
          name:"Step 4",
          img:"step4.png",
          content:"Share on social media under the hashtag \"#gensqzine\" pictures of you and your Zine!",
          colour:"blue"
        }
      ],

      authors: [{
        name:"Geneviève Eloise Tomes (Editor)",
        insta:"https://www.instagram.com/10outofgen/",
      },
      {
        name:"Megi Kiria",
        insta:"https://www.instagram.com/megi_luxe/"
      },
      {
        name:"Harri Kyle"
      },
      {
        name:"Judy Darby"
      },
      {
        name:"Marta Kiria",
        insta:"https://www.instagram.com/_veganjunkie_/"
      },
      {
        name:"Valerie Tomes",
        homeheart:"http://www.lcbc.org.uk/welcome.php"
      },
      {
        name:"Scarlett Tomes",
        insta:"https://www.instagram.com/scarletttomes96/"
      },
      {
        name:"Billy Bones"
      },
      {
        name:"Zahrah Islam",
        insta:"https://www.instagram.com/zahrahtalksblog/",
        web:"https://zahrahtalks.wordpress.com/"
      },
      {
        name:"James Douglas",
        insta:"https://www.instagram.com/jamesdouglas16/"
      },
      {
        name:"Brooklyn Wilkey",
        insta:"https://www.instagram.com/happysundesigns/"
      },
      {
        name:"Maria Green",
        insta:"https://www.instagram.com/lazy_mermaid/"
      },
      {
        name:"Sasha Smith",
        insta:"https://www.instagram.com/sashayawaypoetry/"
      },
      {
        name:"Dustpancake",
        insta:"https://www.instagram.com/dustpancake/"
      },
      {
        name:"Cecile Roques",
        web:"https://www.amazon.co.uk/Pudding-Cecile-Roques-ebook/dp/B088FTRYVF/ref=sr_1_1?dchild=1&keywords=pudding+cecile+roques&qid=1593197332&sr=8-1"
      },
      {
        name:"J. W. Wright",
        insta:"https://www.instagram.com/jackwilliamwright/"
      },
      {
        name:"C. T. Mills",
        insta:"https://www.instagram.com/outwalkingthelights/"
      },
      {
        name:"Kayla Ozzy",
        insta:"https://www.instagram.com/taxidummy_/"
      },
      {
        name:"Haider Hasn",
        insta:"https://www.instagram.com/mumen_sketcher/"
      },
      {
        name:"Aishah Liaqat",
        insta:"https://www.instagram.com/aishahjan15/"
      },
      {
        name:"Joanna Csillag",
        insta:"https://www.instagram.com/joannacsillag/"
      },
      {
        name:"Lua Morgenstern",
        insta:"https://www.instagram.com/luaverena/"
      },
      {
        name:"Ned Matyjaszek",
        insta:"https://www.instagram.com/nedsayshi"
      }].sort(function(a, b){
        var namea = a.name.toUpperCase();
        var nameb = b.name.toUpperCase();
        return (namea < nameb) ? -1 : (namea > nameb) ? 1 : 0;
      }),

      contributors: [
      {
        name:"Nikki Watson"
      },
      {
        name:"Amy Howard",
        web:"https://www.etsy.com/uk/shop/CottonandBelle",
        insta:"https://www.instagram.com/cottonandbelle_",
        fb:"https://www.facebook.com/CottonandBelle/"
      },
      {
        name:"Ellen Pitman",
        web:"https://www.etsy.com/uk/shop/Ellenspetportraits",
        insta:"https://www.instagram.com/ellenspetportraits",
        fb:"https://www.facebook.com/ellenspetportraits/"
      },
      {
        name:"Courtney McMahon",
        insta:"https://www.instagram.com/courtywho/",
        web:"https://courtyym95.wixsite.com/courtneymcmahon",
        homeheart:"https://www.gowithyamo.com/blog/thomas-croft-portraits-for-nhs-heroes"
      }].sort(function(a, b){
        var namea = a.name.toUpperCase();
        var nameb = b.name.toUpperCase();
        return (namea < nameb) ? -1 : (namea > nameb) ? 1 : 0;
      })
    }
  }
}
</script>
