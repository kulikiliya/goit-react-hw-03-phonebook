import { Component } from 'react';
import { FormDiv, Button, Input } from './AddForm.styled';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export class AddForm extends Component {
  state = {
    name: '',
    number: '',
    id: nanoid(),
  };

  handleInput = el => {
    this.setState({ [el.target.name]: el.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContacts(this.state.name, this.state.number, this.state.id);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormDiv onSubmit={this.handleSubmit}>
        <label>
          Name
          <Input
            onChange={this.handleInput}
            value={this.state.name}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Phone
          <Input
            onChange={this.handleInput}
            value={this.state.number}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <Button>Add contact</Button>
      </FormDiv>
    );
  }
}

AddForm.propType = {
  addContacts: PropTypes.func,
};
