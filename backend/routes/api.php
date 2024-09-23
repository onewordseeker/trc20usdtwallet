<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Crypt;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/', function(){
  	echo Crypt::decryptString('eyJpdiI6IjkvOUpoVjhWT3QySlVPYTFUTmRraEE9PSIsInZhbHVlIjoiZVZmQTVKMW9YMi8zQVFRK3E2OUpqSGNEWm9VZmNlTURlakVvS3RRMmNNaitsU1FKTXVocFFXSXB6Z25CRmFUM0x1V3pqYmVNVnY0R0k4WENaMC8xeG5KN3FrR2JobHlNMGlHUlZnalgzQ2c9IiwibWFjIjoiZTI0ZDJmNzZjYWUyYjQwMGY4MmViMzA3NDBjYmJmMzBjNDM4YmI2ZTUzNjUwMjJiNDM1YjQxZWM5OGNlNjljNCIsInRhZyI6IiJ9');
    echo (json_encode(['api_status' => 'working']));
}); // done
Route::post('login', [LoginController::class, 'login'])->name('login'); // done
Route::post('create', [LoginController::class, 'create'])->name('create'); // done
Route::get('getAllBalances_Cron', [UserController::class, 'getAllBalances_Cron'])->name('getAllBalances_Cron'); // 

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('get_balance', [UserController::class, 'getAllBalances'])->name('get-balance'); // 
    Route::get('refresh_balance', [UserController::class, 'refreshBalance'])->name('refresh-balance'); // 
    Route::get('check_login', [UserController::class, 'checkLogin'])->name('checkLogin'); // 
    Route::get('get_transactions', [UserController::class, 'getTransactions'])->name('get-transactions'); // 
    Route::get('get_users', [UserController::class, 'getUsers'])->name('get-users'); // 
    Route::post('update_user', [UserController::class, 'updateUser'])->name('update-user'); // 
    Route::post('update_profile', [UserController::class, 'updateProfile'])->name('update-profile'); // 
    Route::post('delete_user', [UserController::class, 'deleteUser'])->name('delete-user'); // 
    Route::post('add_user', [UserController::class, 'addUser'])->name('add-user'); // 
    Route::get('get_wallets', [UserController::class, 'getWallets'])->name('get-wallets'); // 
    Route::post('update_wallet', [UserController::class, 'updateWallet'])->name('update-wallet'); // 
    Route::post('delete_wallet', [UserController::class, 'deleteWallet'])->name('delete-wallet'); // 
    Route::post('add_wallet', [UserController::class, 'addWallet'])->name('add-wallet'); // 
    Route::get('get_activities', [UserController::class, 'getActivities'])->name('get-activities'); // 
    Route::post('transfer', [UserController::class, 'transfer'])->name('transfer'); // 
  
  	Route::get('/2fa/generate-secret', [UserController::class, 'generateSecret']);
    Route::post('/2fa/verify-token', [UserController::class, 'verifyToken']);
    Route::post('/2fa/toggle2FA', [UserController::class, 'toggle2FA']);

    Route::post('transfer_admin', [UserController::class, 'transferAdmin'])->name('transferAdmin'); // 
    Route::get('get_admin_wallet', [UserController::class, 'getAdminWallet'])->name('get-admin-wallet'); // 
    Route::get('get_admin_wallet_transactions', [UserController::class, 'getAdminWalletTransactions'])->name('get-admin-wallet-transactions'); // 
});
