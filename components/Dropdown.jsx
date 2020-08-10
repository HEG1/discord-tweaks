/*
 * Copyright (c) 2020 NurMarvin (Marvin Witt)
 * Licensed under the Open Software License version 3.0
 */

const { getModuleByDisplayName, React } = require('powercord/webpack')
const AsyncComponent = require('powercord/components/AsyncComponent')
const { FormItem } = require('powercord/components/settings');

const SelectTempWrapper = AsyncComponent.from(getModuleByDisplayName('SelectTempWrapper'));

module.exports = class TextInput extends React.Component {
    render() {
        const { children: title, note } = this.props;
        delete this.props.children;

        return (
            <FormItem title={title} note={note}>
                <SelectTempWrapper {...this.props} />
            </FormItem>
        );
    }
};
