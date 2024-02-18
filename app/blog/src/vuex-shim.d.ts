import { type Store } from "vuex";
import { type HostState } from "../../host/src/bootloader";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<HostState>;
  }
}
