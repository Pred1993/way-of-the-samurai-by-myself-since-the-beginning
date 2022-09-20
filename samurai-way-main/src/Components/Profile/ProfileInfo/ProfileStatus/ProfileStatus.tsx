import React, {ChangeEvent} from 'react';

export type ProfileStatusType = {
    status: string
    updateProfileStatusThunkCreator: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {// при вызове метода записанного Function Declaration необходимо байндить и передавать контекст так как он теряется из-за того, что вызов метода мы отдаём <span>, так работает JS
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {// стрелочная функция не имеет своего контекста и берет его там, где определена, поэтому ее нет смылса байндить
        this.setState({
            editMode: false
        })
        this.props.updateProfileStatusThunkCreator(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return this.state.editMode ? (
            <input onChange={this.onStatusChange} onBlur={this.deActivateEditMode} value={this.state.status} autoFocus/>
        ) : (
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || 'No status'}</span>
        );
    }
};

export default ProfileStatus;