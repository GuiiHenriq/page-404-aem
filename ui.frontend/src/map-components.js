import AppPage from './components/Page/AppPage'
import Header from './components/Header/Header'
import {
  withComponentMappingContext,
  AllowedComponentsContainer,
  MapTo
} from '@mavice/aem-vue-editable-components'

MapTo('vue/components/page')(withComponentMappingContext(AppPage))

const EditConfig = {
  emptyLabel: 'Empty',

  isEmpty: function (props) {
    return !props
  }
}

// Container MapTo
MapTo('vue/components/container')(
  withComponentMappingContext(AllowedComponentsContainer),
  {
    emptyLabel: 'Container',

    isEmpty: function (props) {
      return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0
    }
  }
)

// Header MapTo
MapTo('vue/components/header')(Header, EditConfig)
