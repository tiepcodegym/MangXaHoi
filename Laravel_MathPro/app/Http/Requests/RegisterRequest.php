<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
            'fullname' => 'required',
            'email' => 'required',
            'password' => 'required',
            'phone' => 'required',
            'birthday' => 'required',
        ];
    }

    public function messages()
    {
        return[
            'fullname.required' => 'Fullname không được để trống',
            'email.required' => 'Email không được để trống',
            'password.required' => 'Password không được để trống',
            'phone.required' => 'Phone không được để trống',
            'birthday.required' => 'Birthday không được để trống',
        ];
    }
}
