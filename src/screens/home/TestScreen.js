import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Pressable} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Checkbox = ({ isChecked, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Text>{isChecked ? '✓' : ''}</Text>
    </TouchableOpacity>
);

const Folder = ({ node, onCheckboxChange, onFolderToggle }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleCheckboxChange = () => {
        alert("dd")
        onCheckboxChange(node.id);
    };

    const handleFolderToggle = () => {
        setIsExpanded(!isExpanded);
        onFolderToggle(node.id);
    };

    return (
        <View>
            <TouchableOpacity onPress={handleFolderToggle}>
                <Text>{isExpanded ? '-' : '+'}</Text>
                <Text>{node.name}</Text>
            </TouchableOpacity>
            {isExpanded && (
                <View style={{ marginLeft: 20 }}>
                    {node.children.map((child) => (
                        <View key={child.id}>
                            {child.type === 'dept' ? (
                                <>
                                <Folder
                                    node={child}
                                    onCheckboxChange={onCheckboxChange}
                                    onFolderToggle={onFolderToggle}
                                />
                                    <MaterialCommunityIcons
                                        name={'checkbox-marked'} size={24} color="#000" />
                                </>


                            ) : (
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={styles.container}>
                                        {/*<Pressable onPress={props.onPress}>*/}
                                            <MaterialCommunityIcons
                                                name={'checkbox-marked'} size={24} color="#000" />
                                        {/*</Pressable>*/}
                                        {/*<Text style={styles.title}>{props.title}</Text>*/}
                                    </View>
                                    <Text>{child.name}</Text>
                                </View>
                            )}
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
};

export default function TestScreen() {
    const state = {
        data: [
            {
                id: 115,
                name: '개발부',
                type: 'dept',
                isFirst: true,
                checked: false,
                children: [
                    {
                        id: 12,
                        name: '김모모',
                        type: 'member',
                        checked: false,
                    },
                    {
                        id: 116,
                        name: '서비스개발팀',
                        type: 'dept',
                        checked: false,
                        children: [
                            {
                                id: 111,
                                type: 'member',
                                name: '최성우',
                                checked: false,
                            },
                            {
                                id: 112,
                                type: 'member',
                                name: '김모모',
                                checked: false,
                            },
                        ],
                    },
                ],
            },
            {
                id: 123,
                name: '디자인부',
                type: 'dept',
                checked: false,
                children: [
                    {
                        id: 124,
                        name: '아트팀',
                        type: 'dept',
                        checked: false,
                        children: [
                            {
                                id: 244,
                                name: '김미미',
                                type: 'member',
                                checked: false,
                            },
                            {
                                id: 547,
                                name: '최호수',
                                type: 'member',
                                checked: false,
                            },
                        ],
                    },
                    {
                        id: 1245,
                        name: '일러스트팀',
                        type: 'dept',
                        children: [
                            {
                                id: 423,
                                name: '박명수',
                                type: 'member',
                                isExpanded: false,
                            },
                            {
                                id: 4222,
                                name: '유재석',
                                type: 'member',
                                isExpanded: false,
                            },
                        ],
                    },
                ],
            },
        ],
    };

    const [treeData, setTreeData] = useState(state.data);

    const handleCheckboxChange = (itemId) => {
        const updatedTreeData = updateItemCheckState(treeData, itemId);
        setTreeData(updatedTreeData);
    };

    const updateItemCheckState = (data, itemId) => {
        return data.map((item) => {
            if (item.id === itemId) {
                return { ...item, checked: !item.checked };
            } else if (item.children) {
                return {
                    ...item,
                    children: updateItemCheckState(item.children, itemId),
                };
            }
            return item;
        });
    };

    const handleFolderToggle = (folderId) => {
        const updatedTreeData = updateFolderExpandState(treeData, folderId);
        setTreeData(updatedTreeData);
    };

    const updateFolderExpandState = (data, folderId) => {
        return data.map((item) => {
            if (item.id === folderId) {
                return { ...item, isExpanded: !item.isExpanded };
            } else if (item.children) {
                return {
                    ...item,
                    children: updateFolderExpandState(item.children, folderId),
                };
            }
            return item;
        });
    };

    return (
        <View style={styles.container}>
            {treeData.map((node) => (
                <Folder
                    key={node.id}
                    node={node}
                    onCheckboxChange={handleCheckboxChange}
                    onFolderToggle={handleFolderToggle}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
});
