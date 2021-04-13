import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/components/navigation";
import { Provider as AuthProvider } from "./src/providers/AuthContext";
import { Provider as CommentProvider } from "./src/providers/CommentContext";
import { Provider as CommentsProvider } from "./src/providers/CommentsContext";
import LongTimers from "./src/components/utils/LongTimers";

export default function App() {
  LongTimers();

  return (
    <AuthProvider>
      <CommentProvider>
        <CommentsProvider>
          <PaperProvider>
            <SafeAreaProvider>
              <Navigation />
            </SafeAreaProvider>
          </PaperProvider>
        </CommentsProvider>
      </CommentProvider>
    </AuthProvider>
  );
}
