import "./src/styles/index.scss"

import {
  _wrapRootElement,
  _wrapPageElement,
  _onClientEntry,
  _onRouteUpdate,
} from "./wrapPageElement"

export const wrapRootElement = _wrapRootElement
export const wrapPageElement = _wrapPageElement
export const onClientEntry = _onClientEntry
export const onRouteUpdate = _onRouteUpdate
