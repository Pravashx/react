# React App
## DOM
    Document Object Model
        -Real
            - jQuery

        -Virtual

## Architecture
### Component
### Page

## State Vs Props
- State (Component store data)
    * Data stored by component withing itself
    * Volatile
    * States are global
    * States render and rerender the components wheneva they are 
        changed
    * Based on class structure,
        this.state is used to create state on Functional component
        useState() hook is used to create states

- Props (Incoming Data for Component) (ReadOnly Value) (No Update)
    * Are incoming data to a component
    * Are read only value


    ### React lifecycle Phase

        - Constructor
        - Render
        - Component(State Change)
        - Render (Updated)
        
    * Mounting (load)
    * Updating
    * UnMounting (unload)