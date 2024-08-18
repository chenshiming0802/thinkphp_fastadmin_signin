define(['jquery', 'bootstrap', 'backend', 'table', 'form','csmsignin_xcore'], function ($, undefined, Backend, Table, Form,xcore) {

    var Controller = {
        _queryString: '',
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'csmsignin/confinfo/index' + Controller._queryString,
                    add_url: 'csmsignin/confinfo/add' + Controller._queryString,
                    edit_url: 'csmsignin/confinfo/edit',
                    del_url: 'csmsignin/confinfo/del',
                    multi_url: 'csmsignin/confinfo/multi',
                    import_url: 'csmsignin/confinfo/import',
                    table: 'csmsignin_confinfo',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'weigh',
                fixedColumns: true,
                fixedRightNumber: 1,
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        // {field: 'csmsignin_conf_id', title: __('Csmsignin_conf_id')},
                        {field: 'title', title: __('Title'), operate: 'LIKE'},
                        {field: 'weigh', title: __('Weigh'), operate: false},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'isneedsigined', title: __('Isneedsigined'), searchList: {"Y":__('Isneedsigined y'),"N":__('Isneedsigined n')}, formatter: Table.api.formatter.normal},
                        // {field: 'admin_id', title: __('Admin_id')},
                        {field: 'status', title: __('Status'), searchList: {"normal":__('Normal'),"hidden":__('Hidden')}, formatter: Table.api.formatter.status},
                        // {field: 'b1', title: __('B1'), operate: 'LIKE'},
                        // {field: 'b2', title: __('B2'), operate: 'LIKE'},
                        // {field: 'b3', title: __('B3'), operate: 'LIKE'},
                        // {field: 'b4', title: __('B4'), operate: 'LIKE'},
                        // {field: 'b5', title: __('B5'), operate: 'LIKE'},
                        // {field: 'b6', title: __('B6'), operate: 'LIKE'},
                        // {field: 'b7', title: __('B7'), operate: 'LIKE'},
                        // {field: 'b8', title: __('B8'), operate: 'LIKE'},
                        // {field: 'b9', title: __('B9'), operate: 'LIKE'},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
            Controller.api.rebuildAddUrl(table);
        },
        add: function () {
            Controller.api.bindevent();
            xcore.xc_tab_processfield("csmsignin_conf_id");
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            },
            queryString: function () {
                return location.search.replace("dialog=1", "").split('&').filter(function (item) {
                    return !!item;
                }).join("&");
            },
            rebuildAddUrl: function (table) {
                var $tabs = $('.nav-tabs[data-field]');
                if ($tabs.length > 0) {
                    var field = $tabs.data("field");
                    var options = table.bootstrapTable('getOptions');
                    table.on("pre-body.bs.table", function () {
                        var activeTab = $('.active a', $tabs);
                        var value = activeTab.data("value");
                        var reg = new RegExp(field + "\=(.*?)");
                        var queryString = location.search
                            .replace("dialog=1", "")
                            .replace(reg, "")
                            .split('&')
                            .filter(function (item) {
                                return !!item;
                            }).join("&");
                        if (queryString.indexOf("?") == 0) {
                            queryString = queryString + "&" + field + "=" + value
                        } else {
                            queryString = queryString + "?" + field + "=" + value
                        }
                        options.extend.add_url = 'csmsignin/confinfo/add' + queryString
                    })
                }
            }
        }
    };
    Controller._queryString = Controller.api.queryString();
    return Controller;
});