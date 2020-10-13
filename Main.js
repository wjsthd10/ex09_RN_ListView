import React,{Component} from 'react';
import {View, StyleSheet, Text, FlatList, Image, TouchableOpacity, Alert} from 'react-native';

export default class Main extends Component{

    // 대량의 데이터들
    state={
        datas:["aaa","bbb","ccc","ddd"],
        
        // FlatList에 보여지는 데이터들은 [key]프로퍼티를 가지고 있어야한다.
        datas2:[
            {key:'0', data:"aaa"},
            {key:'1', data:"bbb"},
            {key:'2', data:"vvv"},
            {key:'3', data:"ccc"},            
        ],
        datas3:[
            {key:0,name:'sam',msg:'Hello sam',img:require('./images/moana01.jpg')},
            {key:0,name:'robin',msg:'Hello robin',img:require('./images/moana02.jpg')},
            {key:0,name:'kim',msg:'Hello kim',img:require('./images/moana03.jpg')},
            {key:0,name:'yun',msg:'Hello yun',img:require('./images/moana04.jpg')},
            {key:0,name:'park',msg:'Hello park',img:require('./images/moana05.jpg')},
        ]
    };

    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.title}>Flat List</Text>

                {/* 안드로이드의 리스트뷰와 같은 역할 */}
                {/* 2개의 필수 속성 설정 */}
                {/* 1. data : FlatList가 보여줄 대량의 데이터들 지정*/}
                {/* 2. renderItem : 아이템 하나의 모양(컴포넌트들)을 만들어서 리턴해주는 함수 지정 */}
                {/* ## FlatList가 보여줄 대량의 데이터 배열 각 요소들은  */}
                {/* 반드시 중복되지 않는 값을 가진 key프로퍼티가 있어야함 ## */}
                <FlatList 
                    data={this.state.datas2} 
                    renderItem={({item,index})=>{// 파라미터로 받을때 바로 구조분해 할당을 받아오는 방법
                        // let {item, index}=obj;// 구조분해 할당을 따로 받는 방법
                        return (
                            <Text>{`${item.data}, ${item.key}`}</Text>
                        );
                    }}>
                </FlatList>
                {/* ======================================= */}
                <FlatList
                    data={this.state.datas3}
                    renderItem={({item, index})=>{
                        return(
                            <TouchableOpacity style={styles.view01} onPress={()=>{Alert.alert(item.name)}}>
                                <Image style={styles.img} source={item.img}></Image>
                                <View style={styles.textView}>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemMessage}>{item.msg}</Text>
                                </View>
                            </TouchableOpacity>
                            
                        );
                    }}
                    
                    // data에 key를 사용하는 대신 사용한다.
                    // 실무에서는 DB의 no의 값을 키값으로 한다.(중복되면 안된다.)// 키 저장
                    // keyExtractor={(item)=>{return item.name;}}>
                    keyExtractor={item=>item.name}
                    // 스크롤바 안나오는 속성
                    showsVerticalScrollIndicator={false}
                    // horizontal={true}
                    >
                    

                </FlatList>


            </View>
        );
    }// render mathod....
}// Main class....

const styles=StyleSheet.create({
    root:{
        backgroundColor:'#22668855',
        flex:1,
        padding:16
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        paddingTop:8,
        paddingBottom:16
    },
    img:{
        width:150,
        height:150,
        resizeMode:"cover",
        borderRadius:100,
        marginRight:20
    },
    view01:{
        flexDirection:"row",
        borderRadius:8,
        backgroundColor:'#55886699',
        padding:10,
        marginTop:8
    },
    textView:{
        justifyContent:"center"
    },
    itemName:{
        fontSize:24,
        fontWeight:'bold'
    },
    itemMessage:{
        fontSize:16,
        fontStyle:'italic'
    }
});