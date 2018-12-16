Page({
  data: {
    showLeft1: false,
    showLeft2: false,
    showRight1: false,
    showRigh2: false,
    current: 'homepage',
    visible2: false,
    //小程序没有refs，所以只能用动态布尔值控制关闭
    toggle: false,
    toggle2: false,
    actions2: [
      {
        name: '删除',
        color: '#ed3f14'
      }
    ],
    actions: [
      {
        name: '喜欢',
        color: '#fff',
        fontsize: '20',
        width: 100,
        icon: 'like',
        background: '#ed3f14'
      },
      {
        name: '返回',
        width: 100,
        color: '#80848f',
        fontsize: '20',
        icon: 'undo'
      }
    ]
  },
  toggleLeft1() {
    this.setData({
      showLeft1: !this.data.showLeft1
    });
  },
  toggleLeft2() {
    this.setData({
      showLeft2: !this.data.showLeft2
    });
  },
  toggleRight1() {
    this.setData({
      showRight1: !this.data.showRight1
    });
  },
  toggleRight2() {
    this.setData({
      showRight2: !this.data.showRight2
    });
  },
  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
  }, handleCancel2() {
    this.setData({
      visible2: false,
      toggle: this.data.toggle ? false : true
    });
    console.log(this.data.toggle, 111111111)
  },
  handleClickItem2() {
    const action = [...this.data.actions2];
    action[0].loading = true;

    this.setData({
      actions2: action
    });

    setTimeout(() => {
      action[0].loading = false;
      this.setData({
        visible2: false,
        actions2: action,
        toggle: this.data.toggle ? false : true
      });

    }, 2000);
  },
  handlerCloseButton() {
    this.setData({
      toggle2: this.data.toggle2 ? false : true
    });
  },
  actionsTap() {
    this.setData({
      visible2: true
    });
  }
});
Component({
  externalClasses: ['i-class', 'i-class-mask', 'i-class-header'],

  options: {
    multipleSlots: true
  },

  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    maskClosable: {
      type: Boolean,
      value: true
    },
    showCancel: {
      type: Boolean,
      value: false
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    actions: {
      type: Array,
      value: []
    }
  },

  methods: {
    handleClickMask() {
      if (!this.data.maskClosable) return;
      this.handleClickCancel();
    },

    handleClickItem({ currentTarget = {} }) {
      const dataset = currentTarget.dataset || {};
      const { index } = dataset;
      this.triggerEvent('click', { index });
    },

    handleClickCancel() {
      this.triggerEvent('cancel');
    }
  }
});