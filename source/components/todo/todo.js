const Todo = (function (global) {
    const input = ".todo__input";
    let value = "";

    function generateId() {
        return Math.random().toString(36).substring(7);
    }

    function Item(content, id, isEditing = false) {
        return (
            ` 
            <li class="todo__item" data-id="${id}" data-content="${content}">
            ${isEditing ?
                `<input type="text" class="todo__content" value="${content}"></input>
                 <button class="todo__button" onclick="Todo({ action: 'update', content: '${content}', id: '${id}' })">update</button>
                `
                :
                `<span class="todo__content">${content}</span>
                 <button class="todo__button" onclick="Todo({ action: 'edit', content: '${content}', id: '${id}' })">edit</button>
                `
            }
                <button class="todo__button" onclick="Todo({ action: 'remove', id: '${id}' })">remove</button>
            </li> 
            `
        )
    }


    return (props) => {

        function load() {
            handleInputChange();
            console.log("Todo Loaded");
        }

        function create() {
            let id = generateId();
            $(".todo__list").append(Item(value, id, false));
            $(input).val('');
            value='';
        };

        function remove(id) {
            let element = $(`[data-id=${id}]`);
            $(element).remove();
        };

        function edit(id, content) {
            let element = $(`[data-id=${id}]`);
            $(element).replaceWith(Item(content, id, true));
        }

        function update(id) {
            let element = $(`[data-id=${id}]`);
            let newContent = $(element).children('.todo__content').val();
            $(element).replaceWith(Item(newContent, id, false));
        };

        function handleInputChange() {
            $(input).on('change paste keyup', function () {
                value = $(this).val();
                $(this).val(value);
            })
        }


        // * Calling specific action
        switch (props?.action) {
            case 'create':
                return create();
            case 'remove':
                return remove(props?.id);
            case 'edit':
                return edit(props?.id, props?.content);
            case 'update':
                return update(props?.id);
            default:
                load();
        }
    };

}(window))

Todo();
