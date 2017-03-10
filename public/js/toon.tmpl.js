/**Create by Tuffy*/
'use strict';
$f.$templateCache.put('public/templates/demo-tmpl.html', '<fieldset class="layui-elem-field layui-field-title">    <legend>{{title}}</legend></fieldset>{{for item in list i}}    <blockquote class="layui-elem-quote">        {{if i % 2 === 0}}            <p style="color: red;">{{item.name}}</p>        {{else}}            <p>{{item.name}}</p>        {{/if}}    </blockquote>{{/for}}');
$f.$templateCache.put('public/templates/employee-table-del.html', '<table class="layui-table">    <thead>        <tr>            <th>姓名</th>            <th>部门</th>            <th>岗位</th>            <th>工号</th>            <th>手机号</th>            <th>删除时间</th>            <th style="text-align: center;">操作</th>        </tr>    </thead>    <tbody>        {{for item in list i}}            <tr>                <td>{{item.name}}</td>                <td>{{item.dept}}</td>                <td>{{item.job}}</td>                <td>{{item.jobNumber}}</td>                <td>{{item.phone}}</td>                <td>{{item.delTime}}</td>                <td style="text-align: center;">                    <a href="#">还原</a>                </td>            </tr>        {{/for}}    </tbody></table>');
$f.$templateCache.put('public/templates/employee-table.html', '<table class="layui-table">    <colgroup>        <col width="50">        <col width="100">    </colgroup>    <thead>        <tr>            <th><input type="checkbox"></th>            <th>序号</th>            <th>姓名</th>            <th>手机号</th>            <th>工号</th>            <th>状态</th>            <th style="text-align: center;">操作</th>        </tr>    </thead>    <tbody>        {{for item in list i}}            <tr>                <td><input type="checkbox"></td>                <td>{{i + 1}}</td>                <td>{{item.name}}</td>                <td>{{item.phone}}</td>                <td>{{item.jobNumber}}</td>                <td>{{item.available ? \'可用\' : \'禁用\'}}</td>                <td style="text-align: center;">                    <a href="#">编辑</a>&nbsp;&nbsp;                    {{if item.available}}                        <a href="#">禁用</a>                    {{else}}                        <a href="#">启用</a>                    {{/if}}                </td>            </tr>        {{/for}}    </tbody></table>');
