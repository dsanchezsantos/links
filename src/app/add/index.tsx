import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { router } from "expo-router";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Add() {
    const [category, setCategory] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [url, setURL] = useState<string>("")

    function handleAdd() {
        if(!category) {
            return Alert.alert("Categoria", "Selecione a categoria")
        }

        if(!name.trim()) {
            return Alert.alert("Nome", "Informe o nome")
        }

        if(!url.trim()) {
            return Alert.alert("Nome", "Informe a URL")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                </TouchableOpacity>

                <Text style={styles.title}>
                    Novo
                </Text>
            </View>

            <Text style={styles.label}>
                Selecione uma categoria
            </Text>
            <Categories selected={category} onChange={setCategory} />

            <View style={styles.form}>
                <Input placeholder="Nome" onChangeText={setName} autoCorrect={false} />
                <Input placeholder="URL" onChangeText={setURL} />
                <Button title="Adicionar" onPress={handleAdd} />
            </View>
        </View>
    )
}