import React, { ChangeEvent } from 'react';

export type ProfileStatusType = {
  status: string;
  updateProfileStatusThunkCreator: (status: string) => void;
};

class ProfileStatus extends React.Component<ProfileStatusType> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode() {
    // при вызове метода записанного Function Declaration необходимо байндить и передавать контекст так как он теряется из-за того, что вызов метода мы отдаём <span>, так работает JS
    this.setState({
      editMode: true,
    });
  }

  deActivateEditMode = () => {
    // стрелочная функция не имеет своего контекста и берет его там, где определена, поэтому ее нет смылса байндить
    this.setState({
      editMode: false,
    });
    this.props.updateProfileStatusThunkCreator(this.state.status);
  };

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: any) {
    // вызывается при изменении пропсов и стейта, при первой отрисовке к нам в prevProps.status(предыдущий стейт) который приходит = "" из инициализационнго стейта, потом, когда отрабатывает запрос на получение статуса в this.props.status приходит актуальный статус из сервера и срабатывает блок if, снова запускается метод render() и метод componentDidUpdate (nfr как изменяем стейт в блоке if) но сейчас prevProps.status !== this.props.status будут одинаковы и стейт не будет обновляться!
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }

    console.log('componentDidUpdate');
  }

  render() {
    console.log('componentRender');
    return this.state.editMode ? (
      <input onChange={this.onStatusChange} onBlur={this.deActivateEditMode} value={this.state.status} autoFocus />
    ) : (
      <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || 'No status'}</span>
    );
  }
}

export default ProfileStatus;
