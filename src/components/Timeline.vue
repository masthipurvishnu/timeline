<template>
  <div id="app">
  <v-app id="inspire">
    <v-card>
      <v-card>
        <v-card class="pa-2" elevation="5" style="border: 0 solid red">
          <Search></Search>
        </v-card>
      </v-card>
      <v-card-text class="py-0">
        <v-timeline>
          <v-timeline-item v-for="data in state.tlData" :key="data.id">
            <v-avatar size="40px" color="grey lighten-2" dark>
              <v-icon>mdi-account</v-icon>
            </v-avatar>
            <v-card class="elevation-0">
              <v-card-text>
                <v-list-item-content>
                  <v-list-item-title>{{data.title}}</v-list-item-title>
                  <v-list-item-subtitle>{{data.subtitle}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon>mdi-account</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-card-text>
            </v-card>

          </v-timeline-item>
          <v-timeline-item
            color="pink"
            small
          >
            <v-row class="pt-1 elevation-2">
              <v-col cols="3">
                <strong>5pm</strong>
              </v-col>
              <v-col>
                <strong>New Icon</strong>
                <div class="text-caption">
                  Mobile App
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item
            color="teal lighten-3"
          >
            <v-row class="pt-1 elevation-2">
              <v-col cols="3">
                <strong>3-4pm</strong>
              </v-col>
              <v-col>
                <strong>Design Stand Up</strong>
                <div class="text-caption mb-2">
                  Hangouts
                </div>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                  ></v-img>
                </v-avatar>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                  ></v-img>
                </v-avatar>
                <v-avatar>
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                  ></v-img>
                </v-avatar>
              </v-col>
            </v-row>
          </v-timeline-item>
  
          <v-timeline-item
            color="pink"
            small
          >
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>12pm</strong>
              </v-col>
              <v-col>
                <strong>Lunch break</strong>
              </v-col>
            </v-row>
          </v-timeline-item>
  
          <v-timeline-item
            color="teal lighten-3"
            small
          >
            <v-row class="pt-1">
              <v-col cols="3">
                <strong>9-11am</strong>
              </v-col>
              <v-col>
                <strong>Finish Home Screen</strong>
                <div class="text-caption">
                  Web App
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </v-app>
</div>
</template>

<script>
import Search from "./Search.vue";
// import { setup } from '@componet-api/vue';
export default {
    name: "Timeline",
    // data: () => ({
    // //
    // }),
    components: { Search },
    setup(props, context) {
      const state = {
        tlData : {
          0: {
            id: 0,
            date: '5pm',
            title: 'New Icon',
            description: 'Mobile App',
          },
          1:{
            id: 1,
            date: '3-4pm',
            title: 'Design Stand Up',
            description: 'Hangouts',
            participants:'test test test'
          },
          2:{
            id: 2,
            date: '5-6pm',
            title: 'Testing',
            description: 'Testing',
            participants:'test test test'
          }
        }
      }
      return {
        state
      }
    }
}
</script>
