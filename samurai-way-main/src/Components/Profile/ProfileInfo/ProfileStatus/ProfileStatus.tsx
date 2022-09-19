import React from 'react';

class ProfileStatus extends React.Component<any> {
    state = {
        editMode: false
    }
    activateEditMode(){// при вызове метода записанного Function Declaration необходимо байндить и передавать контекст так как он теряется
        debugger
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {// стрелочная функция не имеет своего контекста и берет его там, где определена, поэтому ее нет смылса байндить
        debugger
        this.setState({
            editMode: false
        })
    }
    render() {
        return this.state.editMode ? (
            <input value={this.props.status} onBlur={this.deActivateEditMode} autoFocus/>
        ) : (
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
        );
    }
};

export default ProfileStatus;