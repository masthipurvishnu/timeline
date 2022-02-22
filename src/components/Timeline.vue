<template>
  <div id="app">
  <v-app id="inspire">
    <v-card
    >
      <v-card
      >
        <v-btn
          absolute
          bottom
          color="pink"
          right
          fab
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-card class="pa-2 purple lighten-3">
          <v-btn icon>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <h3 class="text-h6 font-weight-light text-center grow">
            Timeline
          </h3>
          <Search></Search>
          <v-avatar right="0">
            <v-img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"></v-img>
          </v-avatar>
        </v-card>
          <v-container class="fill-height">
            <v-row align="center">
              <strong class="text-h1 font-weight-regular mr-6">{{new Date().getDate()}}</strong>
              <v-row justify="end">
                <div class="text-h5 font-weight-light">
                  Mondaya
                </div>
                <div class="text-uppercase font-weight-light">
                  February 2015
                </div>
              </v-row>
            </v-row>
          </v-container>
      </v-card>
      <v-card-text class="py-0">
        <v-timeline
          align-top
          dense
        >
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
            small
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

export default {
    name: "Timeline",
    data: () => ({
    //
    }),
    components: { Search }
}
</script>
