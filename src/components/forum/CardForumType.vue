<template>
  <b-card
    class="card-forum-type"
    no-body
  >
    <b-card-body>
      <div
        v-for="transaction in transactionData"
        :key="transaction.mode"
        class="transaction-item"
      >
        <b-media no-body>
          <b-media-aside>
            <b-avatar
              rounded
              size="42"
              :variant="transaction.avatarVariant"
            >
              <feather-icon
                size="18"
                :icon="transaction.avatar"
              />
            </b-avatar>
          </b-media-aside>
          <b-media-body>
            <h6 class="transaction-title">
              {{ transaction.mode }}
            </h6>
          </b-media-body>
        </b-media>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BCardBody, BMediaBody, BMedia, BMediaAside, BAvatar,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BCardHeader,
    BCardTitle,
    BCardBody,
    BMediaBody,
    BMedia,
    BMediaAside,
    BAvatar,
  },
  data() {
    return {
      transactionData: [
        {
          mode: 'Business',
          avatar: 'PocketIcon',
          avatarVariant: 'light-primary',
        },
        {
          mode: 'Social',
          types: 'Add Money',
          avatar: 'CheckIcon',
          avatarVariant: 'light-success',
        },
        {
          mode: 'Life Style',
          avatar: 'DollarSignIcon',
          avatarVariant: 'light-danger',
        },
        {
          mode: 'Technology',
          avatar: 'CreditCardIcon',
          avatarVariant: 'light-warning',
        },
        {
          mode: 'Forex Market',
          avatar: 'TrendingUpIcon',
          avatarVariant: 'light-info',
        },
      ],
    }
  },
}
</script>
