module.exports = function (plop) {
    // controller generator
    plop.setGenerator('component', {
        description: 'react jsx component with scss file',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'component name'
            },
            {
                type: 'confirm',
                name: 'pure',
                message: 'pure function?'
            }
        ],
        actions: function(data) {
            console.log(data.pure);
            return [
                {
                    type: 'add',
                    path: 'src/components/{{properCase name}}/{{properCase name}}.js',
                    templateFile: !data.pure ? 'plop_templates/component-js.hbs' : 'plop_templates/component-pure-js.hbs'
                },
                {
                    type: 'add',
                    path: 'src/components/{{properCase name}}/{{dashCase name}}.scss',
                    templateFile: 'plop_templates/component-scss.hbs'
                }
            ]
        }
    });
};