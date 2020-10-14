<template>
  <v-container grid-list-xl fluid class="ma-0 pa-2">
    <PageTemp v-bind:cards='cards' v-bind:authors='authors' v-bind:contributors='contributors' v-bind:meta='meta'></PageTemp>
    <v-row justify="center" align="center" class="ma-0 pa-2">
        <v-btn>
          <router-link to="/">Return to latest edition</router-link>
        </v-btn>
    </v-row>
  </v-container>
</template>

<script>

import PageTemp from '../components/PageTemp.vue'

export default {
  name: 'Edition1',
  components: {
    PageTemp
  },
  // there's a much better way to do this but i'm too lazy rn
  data() {
    return {
      meta: {
        edition: "May 2020",
        file: "quaranzine_may_2020.pdf",
        icon: "mb_may_2020.jpg",
        background: "b_may_2020.jpg"
      },
      cards:[
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
      authors: [
        {
          name:"Geneviève Eloise Tomes (Editor)",
          insta:"https://www.instagram.com/10outofgen/"
        },
        {
          name:"Molly Saxby",
          insta:"https://www.instagram.com/molllycs/"
        },
        {
          name:"Judy Darby",
        },
        {
          name:"Dustpancake",
          insta:"https://www.instagram.com/dustpancake/",
          web:"http://quaranzine-holiday.s3-website-eu-west-1.amazonaws.com/"
        },
        {
          name:"Fatima Bukhari",
          insta:"https://www.instagram.com/fatimaspoetrymind/",
        },
        {
          name:"Sasha Smith",
          insta:"https://www.instagram.com/sashayawaypoetry/"
        },
        {
          name:"Ellen Pitman",
          insta:"https://www.instagram.com/ellenandollieonholi/"
        },
        {
          name:"Isabelle Tyner",
          insta:"https://www.instagram.com/izzietyner/",
          twitter:"https://twitter.com/TheatreTyner",
          homeheart:"https://www.nsdf.org.uk/"
        },
        {
          name:"Marley Ellis"
        },
        {
          name:"Kayla Ozzy",
          insta:"https://www.instagram.com/taxidummy_/"
        },
        {
          name:"Megan Dalton",
          web:"https://bit.ly/thegenericbookwormreviews"
        },
        {
          name:"Claire Victoria Guffey",
          insta:"https://www.instagram.com/claire.guffey/",
          web:"https://claireguffey.myportfolio.com/"
        },
        {
          name:"Christopher Luna"
        },
        {
          name:"Ned Matyjaszek"
        },
        {
          name:"Gulsum Altinbas",
          insta:"https://www.instagram.com/0637.png/",
          web:"https://cosmicshark.wordpress.com/"
        },
        {
          name:"Shloka Ramachandran",
          insta:"https://www.instagram.com/akolhs/"
        },
        {
          name:"Darius 'VictoryForU' Smith",
          insta:"https://www.instagram.com/victoriousdarius/",
          web:"https://victoryforu.co.uk/"
        },
        {
          name:"Jeannie Brown", // error
          web:"https://podcasts.apple.com/gb/podcast/dmc/id1510836247"
        },
        {
          name:"Grace Emmett",
          insta:"https://www.instagram.com/graceaemmett/"
        },
        {
          name:"Rhiannon Tomes"
        },
        {
          name:"Megha Misra",
          insta:"https://www.instagram.com/meghasmarvels/"
        }
      ].sort(function(a, b){
        var namea = a.name.toUpperCase();
        var nameb =b.name.toUpperCase();
        return (namea < nameb) ? -1 : (namea > nameb) ? 1 : 0;
      }),
      contributors : [
        {
          name:"Courtney McMahon",
          insta:"https://www.instagram.com/courtywho/",
          web:"https://courtyym95.wixsite.com/courtneymcmahon",
          homeheart:"https://www.gowithyamo.com/blog/thomas-croft-portraits-for-nhs-heroes"
        },
        {
          name:"Alexia Tanas"
        },
        {
          name:"Christine Forsyth",
          web:"https://remakescotland.co.uk/?cbg_tz=0",
          homeheart:"https://www.fortheloveofscrubs.scot/"
        },
        {
          name:"Kate Darby",
          fb:"https://www.facebook.com/groups/235635034301001/"
        },
        {
          name:"Rebecca Norman",
          web:"https://www.ccdt.org.uk/"
        },
        {
          name:"Laura Veronica Granese",
          web:"https://www.italki.com/"
        },
        {
          name:"Nikki Watson"
        },
        {
          name:"Joanna Volchek"
        },
        {
          name:"Quentin Birot"
        },
        {
          name:"Vera Bolton"
        },
        {
          name:"Umay Regina Acar"
        },
        {
          name:"Saskia Leach"
        },
        {
          name:"Slim Jim & Thicc Wendy"
        },
        {
          name:"Bryony Warwick"
        },
        {
          name:"Veronica McEnery"
        },
        {
          name:"Alessandre Guccione"
        },
        {
          name:"Kamilia Kaufman Solmunde"
        }
      ].sort(function(a, b){
        var namea = a.name.toUpperCase();
        var nameb =b.name.toUpperCase();
        return (namea < nameb) ? -1 : (namea > nameb) ? 1 : 0;
      })
    }
  }
}
</script>

<style>

</style>
