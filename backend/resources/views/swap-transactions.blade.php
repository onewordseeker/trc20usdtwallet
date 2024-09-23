@extends('layouts.app')
    @section('content')
      
                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <h1 class="h3 mb-2 text-gray-800">SPK Buyings</h1>
                    <p class="mb-4">Below is the buying history of SPK token.</p>

                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Buy SPK Transactions</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Amount Received</th>
                                            <th>SPK Amount Sent</th>
                                            <th>Chain</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @php $i = 1; @endphp
                                        @foreach($transactions as $transaction)
                                         <tr>
                                            <td> {{ $i }} </td>
                                            <td>
                                                <div style="display: flex; flex-direction: row; justify-content: space-between; background-color: #f3f3f3; border-radius: 10px; color: black; padding: 5px; align-items: center;">
                                                    <p style="margin-bottom: 0px">
                                                        {{ $transaction->amount_paid }} {{ $transaction->currency == 'eth' ? 'BNB' : $transaction->currency }}
                                                    </p>
                                                </div>
                                            </td>
                                         	<td>
                                                <div style="display: flex; flex-direction: row; justify-content: space-between; background-color: #f3f3f3; border-radius: 10px; color: black; padding: 5px; align-items: center;">
                                                    <p style="margin-bottom: 0px">
                                                        {{ $transaction->amount }}
                                                    </p>
                                                </div>
                                            </td>
                                         
                                            <td>{{ $transaction->chain == 'ethereum' ? 'BSC' : $transaction->chain }}</td>
                                            <td>
                                                <a target="_blank" href="{{ $transaction->chain == 'tron' ? 'https://tronscan.org/#/transaction/'.$transaction->hash_paid : ($transaction->chain == 'ethereum' ? 'https://bscscan.com/tx/'.$transaction->hash_paid : '#') }}" class="btn btn-sm btn-success">Explore Received transaction</a>
                                                <a target="_blank" href="{{ 'https://bscscan.com/tx/'.$transaction->hash }}" class="btn btn-sm btn-success">Explore Sent transaction</a>

                                           </td>
                                        </tr>
                                        @php $i++; @endphp
                                        @endforeach
                                        </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- /.container-fluid -->

  @endsection