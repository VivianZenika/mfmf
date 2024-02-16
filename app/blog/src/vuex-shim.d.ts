import { type Store } from "vuex";
import { type State } from "../../core/src/bootloader";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
