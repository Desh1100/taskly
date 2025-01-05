import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
} from "react-native";
import { theme } from "../theme";
import { ShoppingListItem } from "../components/ShoppingList";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [shoppingItems, setShoppingItems] = useState([
    { id: "1", name: "Coffee", isCompleted: false },
    { id: "2", name: "Car", isCompleted: false },
    { id: "3", name: "Tea", isCompleted: true },
    { id: "4", name: "Cake", isCompleted: true },
  ]);

  const [filteredItems, setFilteredItems] = useState(shoppingItems);

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    const filtered = shoppingItems.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const renderShoppingItem = ({
    item,
  }: {
    item: { id: string; name: string; isCompleted: boolean };
  }) => <ShoppingListItem name={item.name} isCompleted={item.isCompleted} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Shopping List</Text>
        <Link href="/counter" style={styles.counterLink}>
          Counter
        </Link>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color={theme.colorGrey}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search items..."
          value={searchTerm}
          onChangeText={handleSearch}
        />
      </View>

      <FlatList
        data={filteredItems}
        renderItem={renderShoppingItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>No items found</Text>
        )}
      />

      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colorLightGrey,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  counterLink: {
    color: theme.colorCerulean,
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colorLightGrey,
    borderRadius: 10,
    margin: 16,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    color: theme.colorGrey,
    fontSize: 18,
  },
});
