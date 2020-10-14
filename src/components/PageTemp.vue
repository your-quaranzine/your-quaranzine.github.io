<template>
  <v-container grid-list-xl fluid class="ma-0 pa-0">
    <v-app-bar
      color="green accent-6"
      prominant
      tile
      >
      <v-flex xs6 md3 lg3>
        <v-img src="title.png"></v-img>
      </v-flex>
      <v-spacer></v-spacer>
      <v-btn icon @click="onSave">
        <v-icon color="white">mdi-cloud-download</v-icon>
      </v-btn>
      <v-btn icon @click="onInstagram">
        <v-icon color="white">mdi-instagram</v-icon>
      </v-btn>
    </v-app-bar>

    <v-parallax :src="meta.background" height="460" max-width="2000">
      <v-flex>
        <v-col col="6" class="text-center" align="center">
        </v-col>
      </v-flex>
        <v-row justify="center" align="center" class="ma-0 pa-2">
          <v-flex sx12 md5 lg4>
            <v-hover
            v-slot:default="{ hover }"
            close-delay="200"
            >
              <v-btn color="rgb(255, 0, 0, 0.6)" dark height="200" @click="onSave" width="100%" :elevation="hover ? 24 : 2" rounded>
                <v-row justify="center" align="center" class="ma-0 pa-0">
                  <v-container fluid>
                    <v-layout row class="pa-0" wrap>
                      <v-col col="6">
                        <v-img :src="meta.icon" max-width="120"></v-img>
                      </v-col>
                      <v-col col="6" class="text-center" align="center">
                          <div class="headline" v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.md">
                            <br>Download<br>{{ meta.edition }}!<br>
                          </div>
                          <div v-else>
                            <br><br><br>Download!<br><br>
                          </div>
                          <v-icon color="white">mdi-download</v-icon>
                      </v-col>
                    </v-layout>
                  </v-container>
                </v-row>
              </v-btn>
            </v-hover>
          </v-flex>
        </v-row>
        <v-flex>
          <v-row justify="center" align="center" class="ma-0 pa-2">
            <v-card class="text-center ma-2 pl-10 pr-10 pt-3 pb-3" color="blue" rounded>
              <v-btn icon @click="onInstagram" class="pr-5">
                <v-icon large color="white">mdi-instagram</v-icon>
              </v-btn>
              <v-btn icon @click="onFacebook" class="pl-5">
                <v-icon large color="white">mdi-facebook</v-icon>
              </v-btn>
            </v-card>
          </v-row>
        </v-flex>
        <v-col col="12" align="center">
          <v-flex xs12 md4 lg4>
            <v-img src="helpdist.png"></v-img>
          </v-flex>
        </v-col>
    </v-parallax>

    <v-row justify="center" align="center" class="ma-0 pa-0">
      <v-layout row class="pa-2" wrap>
        <v-flex xs12 md6 lg6 v-for="c in cards" :key="c.name" fluid class="ma-0 pa-0">
          <v-flex class="ma-0 pa-4">

            <v-card class="text-center ma-0" :color="c.colour">
              <v-container fluid>
                <v-row justify="center" align="center" class="ma-0 pa-0">

                  <v-col cols="3">
                    <v-img :src="c.img"></v-img>
                  </v-col>
                  <v-col cols="9" align="left">
                    <v-card-text class="white--text">
                      <div class="display-1">
                        {{ c.name }}
                      </div>
                      <div class="subtitle-1">
                        {{ c.content }}
                      </div>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>

          </v-flex>
        </v-flex>
      </v-layout>
    </v-row>

    <v-row justify="center" align="center" class="ma-0 pa-0">
      <v-layout row class="pa-0" wrap>
        <v-flex xs12 md12 lg12>
          <v-card fluid color="orange lighten-3">
            <v-container fluid>
              <v-col col="12" align="center">
                <div class="display-2 white--text">
                  A big thanks to all <i>your</i> writers and artists!
                </div>
              </v-col>
              <v-row justify="center" align="center" class="ma-0 pa-0" dense fluid>
                <v-layout row class="pa-0" wrap fluid>

                    <v-flex xs6 md4 lg3 v-for="c in authors" :key="c.name" fluid class="ma-0 pa-2">
                      <v-card class="text-center ma-2" height="100%">
                        <v-card-text>
                          <div :class="[{'subtitle-2': $vuetify.breakpoint.xs},
                          {'title':$vuetify.breakpoint.md},
                          {'title':$vuetify.breakpoint.lg}
                          ]">{{c.name}}</div>
                        </v-card-text>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="onContrib(c.fb)" v-if="'fb' in c">
                          <v-icon color="black">mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn icon @click="onContrib(c.insta)" v-if="'insta' in c">
                          <v-icon color="black">mdi-instagram</v-icon>
                        </v-btn>
                        <v-btn icon @click="onContrib(c.twitter)" v-if="'twitter' in c">
                          <v-icon color="black">mdi-twitter</v-icon>
                        </v-btn>
                        <v-btn icon @click="onContrib(c.web)" v-if="'web' in c">
                          <v-icon color="black">mdi-web</v-icon>
                        </v-btn>
                        <v-btn icon @click="onContrib(c.homeheart)" v-if="'homeheart' in c">
                          <v-icon color="black">mdi-home-heart</v-icon>
                        </v-btn>
                      </v-card>
                    </v-flex>
                </v-layout>

              </v-row>

              <v-col col="12" align="center">
                <div class="display-1 white--text">
                  <br>And a heart felt thank-you to all <i>your</i> other contributors!
                </div>
              </v-col>

              <v-row justify="center" align="center" class="ma-0 pa-0" fluid>
                <v-layout row class="pa-0" wrap fluid>

                    <v-flex xs6 md3 lg2 v-for="c in contributors" :key="c.name" class="ma-0 pl-0 pr-0 pt-2 pb-1">
                      <v-card class="text-center ma-3 pa-0" tile height="100%">
                        <v-card-text>
                          <div class="subtitle-1">{{c.name}}</div>
                        </v-card-text>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="onContrib(c.fb)" v-if="'fb' in c">
                          <v-icon color="black">mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn icon @click="onContrib(c.insta)" v-if="'insta' in c">
                          <v-icon color="black">mdi-instagram</v-icon>
                        </v-btn>
                        <v-btn icon @click="onContrib(c.twitter)" v-if="'twitter' in c">
                          <v-icon color="black">mdi-twitter</v-icon>
                        </v-btn>
                        <v-btn icon @click="onContrib(c.web)" v-if="'web' in c">
                          <v-icon color="black">mdi-web</v-icon>
                        </v-btn>
                        <v-btn icon @click="onContrib(c.homeheart)" v-if="'homeheart' in c">
                          <v-icon color="black">mdi-home-heart</v-icon>
                        </v-btn>
                      </v-card>
                    </v-flex>
                </v-layout>

              </v-row>


              <v-col col="12" align="center">
                <div class="subtitle-1">
                  <br>Your Quranzine, {{ meta.edition }}. Website by Geneviève and Dustpancake.
                </div>
              </v-col>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-row>

  </v-container>
</template>

<script>

export default {
  name: 'PageTemp',
  props: ['cards', 'authors', 'contributors', 'meta'],

  methods : {
    onInstagram() {
      this.track("onInstagram");
      window.open("https://www.instagram.com/yourquaranzine/", "_blank");
    },
    onFacebook() {
      this.track("onFacebook");
      window.open("https://www.facebook.com/yourquaranzine", "_blank");
    },
    onSave() {
      this.track("onDownload");
      window.open(this.meta.file, "_blank");
      //console.log(this.meta.file);
    },
    onContrib(item) {
      this.track(item);
      window.open(item, "_blank");
    },
    track(label) {
        this.$gtag.event('select_content', {
          'event_category': 'engagement',
          'event_label': label + " " + this.meta.edition,
          'value': 1
        });
    }
  }
}
</script>
