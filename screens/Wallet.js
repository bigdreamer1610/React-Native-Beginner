import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, SafeAreaView, TouchableHighlight, ScrollView, Switch, FlatList, TouchableOpacity, SectionList } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const BackButton = () => {
    return (
        <TouchableOpacity style={buttonStyles.buttonWrapper}>
            <Image source={require('../assets/wallet/ic_arrow_left.png')} style={buttonStyles.button} />
        </TouchableOpacity>
    )
}

const ConversationButton = () => {
    return (
        <TouchableOpacity style={buttonStyles.buttonWrapper}>
            <Image source={require('../assets/wallet/ic_conversation.png')} style={buttonStyles.button} />
        </TouchableOpacity>
    );
};

const TitleView = ({ name, style, textStyle }) => {
    return (
        <View style={[styles.centerView, style]}>
            <Text style={[styles.title, textStyle]}>{name}</Text>
        </View>
    );
};

const TopNavi = () => {
    return (
        <View style={styles.navi}>
            <BackButton />
            <TitleView name="Giỏ hàng" />
            <ConversationButton />
        </View>
    );
};

const VoucherView = () => {
    return (
        <View style={[styles.horizontalView]}>
            <View style={buttonStyles.buttonWrapper}>
                <Image source={require('../assets/wallet/ic_voucher.png')} style={[buttonStyles.bottomButton, { tintColor: '#ee4e2e' }]} />
            </View>
            <TitleView style={styles.bottomTitle} textStyle={styles.smallText} name="Shopee Voucher" />
            <View>
                <Text style={styles.rightText}> Chọn hoặc nhập mã</Text>
            </View>
        </View>
    );
};

const CoinView = () => {
    return (
        <View style={styles.horizontalView}>
            <View style={buttonStyles.buttonWrapper}>
                <Image source={require('../assets/wallet/ic_dollar.png')} style={buttonStyles.bottomButton} />
            </View>
            <TitleView style={styles.bottomTitle} textStyle={styles.smallText} name="Không thể sử dụng xu" />
            <View>
                <Text style={styles.rightText}>Không có gì</Text>
            </View>
        </View>
    );
};


const BuyView = () => {
    return (
        <View style={styles.horizontalView}>
            <View style={buyStyles.firstView}>
                <View style={{ marginLeft: 15, justifyContent: 'center' }}>
                    <Text>Tất cả</Text>
                </View>
                <View style={{ marginRight: 10, justifyContent: 'center' }}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'black' }}>Tổng Tiền: </Text>
                            <Text style={{ color: '#ee4e2e' }}>đ0</Text>
                        </View>
                        <View>
                            <Text style={{ textAlign: 'right', color: 'orange' }}>Nhận: 0 xu</Text>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={buyStyles.secondView} activeOpacity='0.7'>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Mua hàng</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const Seperator = ({ shadowStyle }) => {
    return (
        <View style={[styles.seperator, shadowStyle]}>
        </View>
    );
};

const CARTDATA = [
    {
        shopName: 'petcare123',
        data: [
            {
                id: 1,
                name: 'Pate meo',
                category: 'Happy cat 160g',
                price: '23.000',
                imageUrl: '../assets/wallet/meo1.jpg'
            },
            {
                id: 2,
                name: 'Pate meo Whiscat',
                category: 'Whiscat 400g ca bien',
                price: '32.500',
                imageUrl: '../assets/wallet/meo2.jpg'
            }
        ]
    },
    {
        shopName: 'shoppingwithme',
        data: [
            {
                id: 3,
                name: 'Pate meo',
                category: 'Happy cat 160g',
                price: '23.000',
                imageUrl: '../assets/wallet/meo2.jpg'
            },
            {
                id: 4,
                name: 'Pate meo Whiscat',
                category: 'Whiscat 400g ca bien',
                price: '32.500',
                imageUrl: '../assets/wallet/meo1.jpg'
            }
        ]
    },
    {
        shopName: 'blackpink2009',
        data: [
            {
                id: 5,
                name: 'Pate meo',
                category: 'Happy cat 160g',
                price: '23.000',
                imageUrl: '../assets/wallet/meo1.jpg'
            },
            {
                id: 6,
                name: 'Pate meo Whiscat',
                category: 'Whiscat 400g ca bien',
                price: '32.500',
                imageUrl: '../assets/wallet/meo1.jpg'
            }
        ]
    }
]

const HeaderShopView = ({ shopName }) => (
    <View style={[styles.horizontalView, { height: 60 }]}>
        <View style={headerItemsStyles.shopInfo}>
            <View style={{ marginLeft: 15 }}>
                <Image source={require('../assets/wallet/ic_store.png')} style={headerItemsStyles.image} />
            </View>
            <View>
                <Text style={headerItemsStyles.shopName}>{shopName}</Text>
            </View>
            <View>
                <Image source={require('../assets/wallet/ic_arrow_right.png')} style={headerItemsStyles.imageArrow} />
            </View>
        </View>
        <View style={{ marginRight: 15 }}>
            <Text style={{ color: 'gray' }}>Sửa</Text>
        </View>
    </View>
);



const CartItemView = ({ name, category, price, url }) => {
    return (
        <View style={cartItemStyles.container}>
            <View style={cartItemStyles.wrapper}>
                <View style={cartItemStyles.imageWrapper}>
                    <Image source={require('../assets/wallet/meo1.jpg')} style={cartItemStyles.image} />
                </View>
                <View style={cartItemStyles.itemInfo}>
                    <View>
                        <Text>{name}</Text>
                    </View>
                    <View style={cartItemStyles.categoryWrapper}>
                        <Text style={cartItemStyles.categoryText}>Phân loại: {category}</Text>
                    </View>
                    <View>
                        <Text style={cartItemStyles.orangeText}>đ{price}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const Wallet = (props) => {
    return (
        <View style={styles.wrapper}>
            <SafeAreaView style={styles.container}>
                <TopNavi />
                <SectionList
                    style={{ backgroundColor: 'white', flex: 1 }}
                    sections={CARTDATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <CartItemView name={item.name} category={item.category} price={item.price} url={item.imageUrl} />}
                    renderSectionHeader={({ section: { shopName } }) => <HeaderShopView shopName={shopName} />}
                    stickySectionHeadersEnabled='false'
                />
                <Seperator shadowStyle={styles.shadowView} />
                <VoucherView />
                <Seperator />
                <CoinView />
                <Seperator />
                <BuyView />
            </SafeAreaView>
        </View>
    );
};

const headerItemsStyles = StyleSheet.create({
    shopInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 20,
        height: 20
    },
    imageArrow: {
        width: 15,
        height: 15
    },
    shopName: {
        marginLeft: 5,
        marginRight: 5,
        fontSize: 15,
        fontWeight: '600'
    }
});
const cartItemStyles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        height: 100
    },
    imageWrapper: {
        alignItems: 'center'
    },
    itemInfo: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: 15,
    },
    container: {
        padding: 15,
        paddingBottom: 20
    },
    orangeText: {
        color: '#ee4e2e',
        fontWeight: '600'
    },
    categoryWrapper: {
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#f4f4f4',
        height: 34,
        borderRadius: 6
    },
    categoryText: {
        marginLeft: 5,
        marginRight: 30,
        color: '#575757'
    }
});


const buyStyles = StyleSheet.create({
    secondView: {
        backgroundColor: '#ee4e2e',
        width: 90,
        alignItems: 'center'
    },
    firstView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});


const buttonStyles = StyleSheet.create({
    buttonWrapper: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 25,
        height: 25,
        tintColor: 'white',
    },
    bottomButton: {
        width: 25,
        height: 25
    }
});

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'flex-start',
        backgroundColor: '#ee4e2e',
        flex: 1
    },
    container: {
        flex: 1
    },
    buttonStyle: {
        fontSize: 50
    },
    innerText: {
        color: 'white',
        fontSize: 25
    },
    navi: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    centerView: {
        flex: 1,
        alignItems: 'center'
    },
    horizontalView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    bottomTitle: {
        alignItems: 'flex-start'
    },
    smallText: {
        fontSize: 15,
        fontWeight: 'normal',
        color: 'black'
    },
    rightText: {
        marginRight: 10,
        color: '#9e9d89'
    },
    seperator: {
        backgroundColor: 'lightgray',
        height: 0.5
    },
    shadowView: {
        shadowOffset: {
            width: 8,
            height: -4
        },
        shadowRadius: 10
    }
});

export default Wallet;