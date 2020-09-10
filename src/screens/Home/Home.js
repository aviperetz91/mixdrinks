import React, { useState } from 'react';
import { Container, Header, Left, Title, Tab, Tabs, TabHeading, Text, Right, Button, Icon } from 'native-base';
import { View, TouchableOpacity } from 'react-native';
import { Tooltip, SearchBar } from 'react-native-elements';
import Categories from '../Categories/Categories/';
import Filters from '../Filters/Filters';
import Colors from '../../constants/Colors';

const Home = props => {

    const [activeTab, setActiveTab] = useState(0);
    const [displaySearchBar, setDisplaySearchBar] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    const tooltipRef = React.createRef();
    const searchBarRef = React.createRef();

    return (
        <Container>
            {displaySearchBar ?
                <View style={{ elevation: 15, backgroundColor: 'white' }}>
                    <SearchBar
                        ref={searchBarRef}
                        placeholder="Search..."
                        onChangeText={(input) => setSearchInput(input)}
                        value={searchInput}
                        searchIcon={
                            <TouchableOpacity onPress={() => {
                                setDisplaySearchBar(false);
                                setSearchInput('')
                            }}>
                                <Icon name='arrow-back' style={{ fontSize: 23, color: Colors.primary }} />
                            </TouchableOpacity>
                        }
                        lightTheme
                        containerStyle={{ backgroundColor: 'white' }}
                        inputContainerStyle={{ backgroundColor: 'white' }}
                    />
                </View>
                :
                <Header hasTabs style={{ marginBottom: 15, backgroundColor: Colors.primary }} androidStatusBarColor={Colors.darkPrimary}>
                    <Left>
                        <View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Button transparent onPress={() => tooltipRef.current.toggleTooltip()}>
                                    <Icon type={'Ionicons'} name={"ellipsis-vertical"} color={'white'} style={{ fontSize: 20 }} />
                                </Button>
                                {/* {activeTab === 1 ? */}
                                    <Button transparent onPress={() => {
                                        const toggle = !displaySearchBar;
                                        setDisplaySearchBar(toggle)
                                    }}>
                                        <Icon type={'Ionicons'} name={"search"} color={'white'} style={{ fontSize: 20 }} />
                                    </Button>
                                    {/* : null} */}
                            </View>
                            <Tooltip
                                ref={tooltipRef}
                                backgroundColor={'white'}
                                containerStyle={{ borderRadius: 3, elevation: 5, position: 'absolute', top: 0, left: 0 }}
                                height={75}
                                width={120}
                                withOverlay={false}
                                popover={
                                    <View>
                                        <TouchableOpacity
                                            style={{ marginVertical: 5 }}
                                            onPress={() => tooltipRef.current.toggleTooltip()}
                                        >
                                            <Text>My Account</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{ marginVertical: 5 }}
                                            onPress={() => tooltipRef.current.toggleTooltip()}
                                        >
                                            <Text>Settings</Text>
                                        </TouchableOpacity>
                                    </View>
                                }>
                            </Tooltip>
                        </View>
                    </Left>
                    <Right>
                        <Title style={{ marginRight: 10 }}>
                            The Cocktail Book
                    </Title>
                    </Right>
                </Header>
            }
            {displaySearchBar ?
                null
                :
                <Tabs
                    initialPage={activeTab}
                    onChangeTab={(event) => setActiveTab(event.i)}
                >
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: Colors.primary }}>
                            <Icon type={'FontAwesome'} name={'th-large'} color={"white"} style={{ fontSize: 18 }} />
                            <Text> Categories</Text>
                        </TabHeading>
                    }>
                        <Categories navigation={props.navigation} />
                    </Tab>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: Colors.primary }}>
                            <Icon type={'FontAwesome'} name={'filter'} color={"white"} style={{ fontSize: 18 }} />
                            <Text> Filters</Text>
                        </TabHeading>
                    }>
                        <Filters navigation={props.navigation} />
                    </Tab>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: Colors.primary }}>
                            <Icon type={'FontAwesome'} name={'star'} color={"white"} style={{ fontSize: 18 }} />
                            <Text> Favorites</Text>
                        </TabHeading>
                    }>
                    </Tab>
                </Tabs>
            }
        </Container>
    );
}

export default Home;