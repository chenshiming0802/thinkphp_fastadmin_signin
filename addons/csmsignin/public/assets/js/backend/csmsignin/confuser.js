define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'csmsignin/confuser/index' + location.search,
                    add_url: 'csmsignin/confuser/add',
                    edit_url: 'csmsignin/confuser/edit',
                    del_url: 'csmsignin/confuser/del',
                    multi_url: 'csmsignin/confuser/multi',
                    table: 'csmsignin_confuser',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        //{field: 'csmsignin_conf_id', title: __('Csmsignin_conf_id')},
                        {field: 'username', title: __('Username')},
                        {field: 'usermobile', title: __('Usermobile')},
                        {field: 'signinstatus', title: __('Signinstatus'), searchList: {"Y":__('Signinstatus y'),"N":__('Signinstatus n')}, formatter: Table.api.formatter.status},
                        {field: 'signintime', title: __('Signintime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'status', title: __('Status'), searchList: {"normal":__('Normal'),"hidden":__('Hidden')}, formatter: Table.api.formatter.status},
                        //{field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        //{field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        // {field: 'admin_id', title: __('Admin_id')},
                        // {field: 'b1', title: __('B1')},
                        // {field: 'b2', title: __('B2')},
                        // {field: 'b3', title: __('B3')},
                        // {field: 'b4', title: __('B4')},
                        // {field: 'b5', title: __('B5')},
                        // {field: 'b6', title: __('B6')},
                        // {field: 'b7', title: __('B7')},
                        // {field: 'b8', title: __('B8')},
                        // {field: 'b9', title: __('B9')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            $("#c-csmsignin_conf_id").val($("#indexpageparentid", window.top.document).val());
            $("#addpageparentname").text($("#indexpageparentname", window.top.document).val());            
            Controller.api.bindevent();
        },
        edit: function () {
            $("#editpageparentname").text($("#indexpageparentname", window.top.document).val());
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});