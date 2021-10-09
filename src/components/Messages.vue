<template>
    <div>
        
        <div 
            v-for='(message, $messageIndex) in messages'
            :key="$messageIndex"
        >
            <p>{{message.content}}</p>
            <span>{{message.privacy}}</span>
        </div>
    </div>    
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['messages']),
    }
}
</script>
