export default function (plop) {
    
    plop.setHelper('pascalCase', (text) => {
        return text
            .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
                index === 0 ? match.toUpperCase() : match.toUpperCase()
            )
            .replace(/\s+/g, '');
    });

    
    plop.setHelper('camel-case', (text) => {
        return text.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    });

    plop.setGenerator('composant', {
        description: 'Créer un nouveau composant',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Nom du composant :',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.jsx',
                templateFile: 'plop-templates/component.jsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{camel-case name}}.scss',
                templateFile: 'plop-templates/component.scss.hbs',
            },
        ],
    });
}
