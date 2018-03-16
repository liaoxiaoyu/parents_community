<template>
    <div>
        <mu-appbar title="发表文章" titleClass="titleClass">
            <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="RouterOne" />
        </mu-appbar>

        <mu-card style="margin-bottom: 1em;padding: 1em;">
            <mu-text-field hintText="请输入标题" :errorText="inputErrorText" @textOverflow="handleInputOverflow" :maxLength="20" fullWidth/><br/>
            <mu-text-field hintText="请输入内容" helpText="利用空格分段增加可读性" :errorText="multiLineInputErrorText" @textOverflow="handleMultiLineOverflow" multiLine :rows="3" fullWidth :rowsMax="6"/><br/>
            <mu-select-field   targetOrigin v-model="game"  :errorText="errorText" fullWidth :icon="LaBel_Icon" @change="label_Icon_data" >
                <mu-menu-item v-for="item in LaBel_Data"  :key="item.icon" :value="item.icon"  :title="item.name + '  |  ' + item.introduce" />
            </mu-select-field>
        </mu-card>
        <div class="center_class">
            <mu-raised-button  label="立即发布" class="demo-raised-button" backgroundColor="#57A3FF" fullWidth /><br /><br />
            <mu-raised-button label="取消" fullWidth/>
        </div>
    </div>
</template>
<script>
    export default {
    data () {
        return {
            input: '',
            inputErrorText: '',
            multiLineInput: '',
            multiLineInputErrorText: '',
            game: '',
            LaBel_Data: {},
            LaBel_Icon: 'view_comfy',
            Home_Label: {},
            Home_Label_value: '',
            bottomSheet: false,
            list_icon: 'radio_button_unchecked',
            list_icon_color: '',
        }
    },
    computed: {
        errorText () {
            return this.game ? '' : '选择标签'
        }
    },
    created() {
      axios.get('homelabel')
        .then(res => {
            if(res.status === 200) {
                this.Home_Label = res.data.data.list;
                axios.get('label')
                    .then(res => {
                        if(res.status === 200) {
                            this.LaBel_Data = res.data.data.list;
                            //console.log(this.colligate);
                        }
                    })
            }
        })
    },
    methods: {
        handleInputOverflow (isOverflow) {
            this.inputErrorText = isOverflow ? '标题过长！' : ''
        },
        handleMultiLineOverflow (isOverflow) {
            this.multiLineInputErrorText = isOverflow ? '内容字数超出！' : ''
        },
        label_Icon_data (val) {
            this.LaBel_Icon = val
        },
        closeBottomSheet () {
            this.bottomSheet = false
        },
        openBottomSheet () {
            this.bottomSheet = true
        },
        ListIcon () {
            this.list_icon = (this.list_icon === 'radio_button_unchecked' && 'radio_button_checked') || 'radio_button_unchecked';
            this.list_icon_color = (this.list_icon === 'radio_button_checked' && 'red') || '';
        },
        RouterOne(){
            this.$router.go(-1);
        }
    }
    }
</script>
<style scoped lang="less">
    .titleClass{
        text-align:center;
        font-size: 1.15em;
        margin-right: 15.2%;
    }
    .top_class{
        display: flex;
        justify-content: space-around;
        margin-bottom: 1em;
        padding: 1em;
    }
    .center_class{
        margin-bottom: 1em;
        padding:0 1em 0 1em;
    }
</style>
