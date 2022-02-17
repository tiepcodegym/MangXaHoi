<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required',
            'password' => 'required',
            'fullname' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'hobby' => 'required',
            'birthday' => 'required',
            'role' => 'required',
        ];
    }
    public function messages()
    {
        return[
            'email.required' => 'Email không được để trống',
            'password.required' => 'Password không được để trống',
            'fullname.required' => 'Fullname không được để trống',
            'address.required' => 'Address không được để trống',
            'phone.required' => 'Phone không được để trống',
            'hobby.required' => 'Hobby không được để trống',
            'birthday.required' => 'Birthday không được để trống',
            'role.required' => 'Role không được để trống',
        ];
    }
}
