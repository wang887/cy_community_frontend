<template>
    <el-card class="box-card" shadow="never">
        <div slot="header">
            <span>💴 赏金</span>
        </div>
        <b-tabs v-model="activeTab" :multiline="multiline">
            <template v-for="tab in tabs">
                <b-tab-item
                    v-if="tab.displayed"
                    :key="tab.id"
                    :value="tab.id"
                    :label="tab.label">
                    <!-- {{ tab.content }} -->
                    <img :src="tab.content" alt="money">
                </b-tab-item>
            </template>
        </b-tabs>
    </el-card>
</template>

<script>

    export default {
        data() {
            return {
                activeTab: 'tab1',
                multiline: true,
            }
        },
        computed: {
            baseTabs() {
                return [
                    {
                        id: 'tab1',
                        label: '自定义',
                        content: require('@/assets/image/customization.jpg'),
                        displayed: true,
                    },
                    {
                        id: 'tab2',
                        label: '10元',
                        content: require('@/assets/image/10.jpg'),
                        displayed: true,
                    },
                    {
                        id: 'tab3',
                        label: '20元',
                        content: require('@/assets/image/20.jpg'),
                        displayed: true,
                    },
                ]
            },
            tabs() {
                const tabs = [...this.baseTabs]
                return tabs
            },
        }
    }
</script>