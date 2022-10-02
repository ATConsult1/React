# React
React repo for learning

## React Hooks:
- useState
- useEffect
- useContext
- ...

React LifeCycle:
## Жизненный цикл компонента:
- componentWillMount
- componentDidMount
- componentWillUnmount
- componentWillUpdate
- componentDidUpdate
- shouldComponentUpdate
- componentWillReceiveProps
- componentDidCatch

### Начальный рендер

1. default props
2. get sate
3. componentWillMount()
4. render()
5. componentDidMount()

### Обновление состояния

1. shouldComponentUpdate()
2. componentWillMount()
3. render()
4. componentDidMount()

### Обновление свойств
(свойство компонента изменяется после того, как оно было визуализировано в DOM)

1. componentWillReceiveProps()
2. shouldComponentUpdate()
3. componentWillMount()
4. render()
5. componentDidMount()


### Размонтирование
(компонент уничтожается и удаляется из DOM)

1. componentWillUnmount() 
