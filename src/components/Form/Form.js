// App.js
import React, { Component } from 'react';
import { dripForm } from 'react-drip-form';
import Input from './Fields/Input';
import Password from './Fields/Password';
import Checkbox from './Fields/Checkbox';
import Radio from './Fields/Radio';
import Select from './Fields/Select';
import Tags from './Fields/Tags';
import Reference from './Fields/Reference';
import FieldGroup from './Fields/Group';

import './form.scss';

const renderField = ({fields,field, repeaterName = false, index}) => {
	let fieldName = repeaterName ? `${repeaterName}.${field.name}`: field.name;
	
	switch(field.type){
		case 'text':
			return (
		    <div key={index}>
		      <label>{field.label}</label>
		      <Input type="text" name={fieldName} />
		    </div>
			)
		break;

		case 'password':
			return (
		    <div key={index}>
		      <label>{field.label}</label>
		      <Input type="password" name={fieldName} />
		    </div>
			)
		break;

		case 'tags':
			return (
		    <div key={index}>
		      <label>{field.label}</label>
		      <Tags name={fieldName} />
		    </div>
			)
		break;

		case 'reference':
			return (
		    <div key={index}>
		      <label>{field.label}</label>
		      <Reference name={fieldName} field={field}/>
		    </div>
			)
		break;		

		case 'select':
			return (
		    <div key={index}>
		      <label>{field.label}</label>
		      <Select name={fieldName}>
		        <option value="" disabled>Select...</option>
		        {field.values.map((value, index) => <option key={index} value={value}>{value}</option>)}
		      </Select>
		    </div>
			)
		break;

		case 'repeater':
			let initialField = {};
			field.fields.map(f => {
				initialField[f.name] = '';
			});
			return (
				<div key={index}>
					<p>{field.label}</p>
				  <a onClick={() => fields.push(`${fieldName}s`, initialField)}>Add Item</a>

					{fields.map(`${fieldName}s.*`, (repeaterName, repeaterIndex) => (
		      	<div key={repeaterName} key={repeaterIndex}>
							{field.fields.map((field, index) => renderField({fields, field, repeaterName, index}))}
							<a onClick={() => fields.remove(repeaterName)}>Delete</a>
						{/*}
		        <label htmlFor={repeaterName}>Team name #{repeaterIndex + 1}</label>
		        <Input
		          type="text"
		          name={`${repeaterName}.name`}
		          label="Team name"
		        />

		        <div>
		       		<FieldGroup name={`${repeaterName}.scope`}>
				        <div>
				          <Radio value="pivate" />
				          <label htmlFor={`${repeaterName}.scope.private`}>Private</label>
				        </div>
				        <div>
				          <Radio value="public" />
				          <label htmlFor={`${repeaterName}.scope.public`}>Public</label>
				        </div>
			        </FieldGroup>
		          <button onClick={() => fields.remove(repeaterName)}>Delete</button>
		        </div>
						*/}
		      	</div>
		    	))}
		    </div>
		  )
		break
	}
}

const Form = ({ fields, handlers, schema }) => (
  <form onSubmit={handlers.onSubmit}>
  	{schema.fields.map((field, index) => renderField({fields,field}))}

  	{/*}
    <div>
      <label>Gender</label>
      <FieldGroup name="gender">
        <div>
          <Radio id="gender-female" value="female" />
          <label htmlFor="gender-female">Female</label>
        </div>
        <div>
          <Radio id="gender-male" value="male" />
          <label htmlFor="gender-male">Male</label>
        </div>
        <div>
          <Radio id="gender-other" value="other" />
          <label htmlFor="gender-other">Other</label>
        </div>
        <div>
          <Radio id="gender-none" value="Rather not say" />
          <label htmlFor="gender-none">Other</label>
        </div>
      </FieldGroup>
    </div>

    <div>
      <label>Favorite Colors</label>
      Note: If the value is an array, specify the `multiple` attribute! 
      <FieldGroup name="colors" multiple>
        <div>
          <Checkbox id="colors-red" value="red" />
          <label htmlFor="colors-red">Red</label>
        </div>
        <div>
          <Checkbox id="colors-blue" value="blue" />
          <label htmlFor="colors-blue">Blue</label>
        </div>
        <div>
          <Checkbox id="colors-green" value="green" />
          <label htmlFor="colors-green">Green</label>
        </div>
      </FieldGroup>
    </div>

    <div>
      <Select name="language">
        <option value="">Select your language</option>
        <option value="en-us">English (UK)</option>
        <option value="en-uk">English (UK)</option>
        <option value="ja">Japanese</option>
      </Select>
    </div>
  	{*/}
    <div>
      <button onClick={handlers.onSubmit}>Submit!</button>
    </div>
  </form>
);

export default dripForm()(Form);
