export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#0043F9',
    backgroundLight: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777',
  };
  
  export const domain = {
    domain:"192.168.100.32:8088"
  }


  export const Items = [
    {
      id: 1,
      category: 'product',
      productName: 'Bò xào rau muống',
      productPrice: 100000,
      description:
        'Thịt bò xào rau muống với những cọng rau muống tươi ngon, non xanh mơn mởn, chần sơ qua nước sôi cho sợi rau dị rồi xào nhanh tay với thịt bò đã ướp gia vị cho món ăn vừa chín tới, thơm phưng phức.',
      isOff: true,
      offPercentage: 10,
      productImage: require('../database/images/products/beef/bo_xao_rau_muong.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/products/beef/children_bao_xao_can_tay/beef_children.jpg'),
        require('../database/images/products/beef/children_bao_xao_can_tay/cay-can-tay1.png'),
        require('../database/images/products/beef/children_bao_xao_can_tay/toi.jpg'),
      ],
    },
    {
      id: 2,
      category: 'product',
      productName: 'Bò xào cần tây',
      productPrice: 150000,
      description:
        'Thịt bò xào rau muống với những cọng rau muống tươi ngon, non xanh mơn mởn, chần sơ qua nước sôi cho sợi rau dị rồi xào nhanh tay với thịt bò đã ướp gia vị cho món ăn vừa chín tới, thơm phưng phức.',
      isOff: false,
      productImage: require('../database/images/products/beef/bo_xao_can_tay.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/products/beef/children_bao_xao_can_tay/beef_children.jpg'),
        require('../database/images/products/beef/children_bao_xao_can_tay/rau_muong.jpg'),
        require('../database/images/products/beef/children_bao_xao_can_tay/toi.jpg'),
      ],
    },
    {
      id: 3,
      category: 'accessory',
      productName: 'Bắp cải xào nấm',
      productPrice: 15000,
      description:
        'Thịt bò xào rau muống với những cọng rau muống tươi ngon, non xanh mơn mởn, chần sơ qua nước sôi cho sợi rau dị rồi xào nhanh tay với thịt bò đã ướp gia vị cho món ăn vừa chín tới, thơm phưng phức.',
      isOff: true,
      offPercentage: 18,
      productImage: require('../database/images/accessories/vegetable/bap_cai_xao_nam.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/accessories/vegetable/children/bongcai.jpg'),
        require('../database/images/accessories/vegetable/children/nam.jpg'),
      ],
    },
    {
      id: 4,
      category: 'accessory',
      productName: 'Bí xảo tỏi',
      productPrice: 25000,
      description:
        'Thịt bò xào rau muống với những cọng rau muống tươi ngon, non xanh mơn mởn, chần sơ qua nước sôi cho sợi rau dị rồi xào nhanh tay với thịt bò đã ướp gia vị cho món ăn vừa chín tới, thơm phưng phức.',
      isOff: false,
      productImage: require('../database/images/accessories/vegetable/bi_xao_toi.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/accessories/vegetable/children/raubi.jpg'),
        require('../database/images/accessories/vegetable/children/toi.jpg'),
      ],
    },
    {
      id: 5,
      category: 'accessory',
      productName: 'Cải thìa sào tỏi',
      productPrice: 30000,
      description:
        'Thịt bò xào rau muống với những cọng rau muống tươi ngon, non xanh mơn mởn, chần sơ qua nước sôi cho sợi rau dị rồi xào nhanh tay với thịt bò đã ướp gia vị cho món ăn vừa chín tới, thơm phưng phức.',
      isOff: false,
      productImage: require('../database/images/accessories/vegetable/cai_thia_sao_toi.png'),
      isAvailable: false,
      productImageList: [
        require('../database/images/accessories/vegetable/children/caithai.jpg'),
        require('../database/images/accessories/vegetable/children/toi.jpg'),
      ],
    },
    {
      id: 6,
      category: 'accessory',
      productName: 'Rau muống xào tỏi',
      productPrice: 30000,
      description:
        'Thịt bò xào rau muống với những cọng rau muống tươi ngon, non xanh mơn mởn, chần sơ qua nước sôi cho sợi rau dị rồi xào nhanh tay với thịt bò đã ướp gia vị cho món ăn vừa chín tới, thơm phưng phức.',
      isOff: false,
      productImage: require('../database/images/accessories/vegetable/rau_muong_sao_toi.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/accessories/vegetable/children/raumuong.jpg'),
        require('../database/images/accessories/vegetable/children/toi.jpg'),
      ],
    },
  ];
  